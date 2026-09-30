(() => {
  'use strict';
  const G = window.StyleGame, A = window.StyleArt;
  const $ = selector => document.querySelector(selector);
  const STORAGE_KEY = 'style-club-v1';
  let outfit = G.defaultOutfit(), themeId = 'garden', category = 'dresses', selectedId = 'petal';
  let looks = [], history = [], pose = 0, view = 'studio', sound = false, audioContext;
  let toastTimeout, storageWarning = false, confirmCallback, runwayDraft;
  let boutique = null, runway3d = null;
  let dragState = null, cardPointer = null, suppressClickUntil = 0, friends = true;
  let collection = '', extraFilter = 'all';
  let activityState=null,makeupDraft=null,suggestion=null,photoDraft=null,photoFriends=[],photoAvailable=false,photoFrame=0;
  const portraitCache = new Map();
  let timer = { mode: 'free', status: 'ready', remaining: 180000, deadline: null, interval: null };

  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (raw && raw.version === 1) {
      outfit = G.sanitizeOutfit(raw.outfit);
      looks = G.sanitizeLooks(raw.looks);
      themeId = G.THEMES.some(t => t.id === raw.themeId) ? raw.themeId : 'garden';
    }
  } catch { storageWarning = true; }

  function persist() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, outfit, themeId, looks })); return true; }
    catch {
      if (!storageWarning) { toast('This browser can’t save right now. You can still play and download your looks.'); storageWarning = true; }
      return false;
    }
  }
  function toast(message) {
    clearTimeout(toastTimeout);
    $('#toast').textContent = message;
    $('#toast').classList.add('show');
    toastTimeout = setTimeout(() => $('#toast').classList.remove('show'), 3800);
  }
  function chime(type = 'pick') {
    if (!sound) return;
    try {
      audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
      if (audioContext.state === 'suspended') audioContext.resume().catch(() => {});
      const notes = type === 'runway' ? [523.25, 659.25, 783.99, 1046.5] : type === 'save' ? [659.25, 880] : [659.25];
      notes.forEach((frequency, index) => {
        const oscillator = audioContext.createOscillator(), gain = audioContext.createGain();
        const start = audioContext.currentTime + index * .12;
        oscillator.type = 'sine'; oscillator.frequency.value = frequency;
        gain.gain.setValueAtTime(0, start); gain.gain.linearRampToValueAtTime(.055, start + .02); gain.gain.exponentialRampToValueAtTime(.001, start + .27);
        oscillator.connect(gain); gain.connect(audioContext.destination); oscillator.start(start); oscillator.stop(start + .3);
        oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
      });
    } catch { sound = false; renderSound(); toast('Sound isn’t available in this browser. You can keep playing.'); }
  }
  function injectIcons(scope = document) { scope.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = A.icon(el.dataset.icon); }); }
  function theme() { return G.THEMES.find(t => t.id === themeId); }
  function inCollection(item) { return (item.collection || '') === collection || (item.id==='fresh-face'&&collection); }
  function availableCategories() { return G.CATEGORIES.filter(cat=>G.ITEMS.some(item=>item.category===cat.id&&inCollection(item))); }
  function currentItems() {
    return G.ITEMS.filter(item=>item.category===category&&inCollection(item)&&(category!=='extras'||extraFilter==='all'||(extraFilter==='pets'?item.slot==='pet':['neck','ears','wrist'].includes(item.slot)))).sort((a,b)=>Number(!!b.fresh)-Number(!!a.fresh));
  }
  function activePiece() {
    if(makeupDraft&&category==='makeup')return G.byId[makeupDraft.id];
    const preferred = G.byId[selectedId];
    const items=currentItems();
    if (preferred&&items.includes(preferred)&&G.selection(outfit, preferred)) return preferred;
    return items.find(item => G.selection(outfit, item));
  }
  function pieceColor(item) {
    if(makeupDraft&&item.id===makeupDraft.id)return makeupDraft.color;
    if (item.category === 'hair') return outfit.hairColor;
    if (item.category === 'makeup') return G.selection(outfit,item) ? outfit.makeupColor : item.color;
    return G.worn(outfit).find(p => p.id === item.id)?.color || item.color;
  }
  function describeOutfit() {
    const clothes = G.worn(outfit).map(p => G.byId[p.id].name);
    return `Your character wearing ${clothes.join(', ')}, with ${G.byId[outfit.hair].name.toLowerCase()}${outfit.makeup&&outfit.makeup!=='fresh-face'?` and ${G.byId[outfit.makeup].name.toLowerCase()}`:''}.`;
  }
  function renderAvatar() {
    const label = describeOutfit();
    if (boutique) boutique.setOutfit(outfit);
    else $('#avatar').innerHTML = A.avatar(outfit, G.byId, { label });
    $('#avatar').setAttribute('aria-label', label);
    $('#avatar').className = boutique ? 'world-host' : `avatar pose-${pose}`;
    $('#undo-button').disabled = history.length === 0;
  }
  function renderTheme() {
    const t = theme();
    $('#theme-icon').textContent = t.icon;
    $('#theme-button').innerHTML = `${A.esc(t.name)} ${A.icon('chevron')}`;
    $('#theme-description').textContent = t.description;
    $('#theme-button').setAttribute('aria-label', `Current theme: ${t.name}. Choose a theme`);
    $('#scene').style.backgroundColor = t.bg;
    boutique?.setTheme(t);
  }
  function renderWardrobe(resetScroll = false) {
    const grid = $('#wardrobe-grid'), scroll = resetScroll ? 0 : grid.scrollTop;
    const focusItem = document.activeElement?.dataset.item;
    const focusColor = document.activeElement?.dataset.color;
    const categories=availableCategories();if(!categories.some(cat=>cat.id===category))category=categories[0].id;
    $('#category-tabs').style.setProperty('--categories',categories.length);
    $('#category-tabs').innerHTML = categories.map(cat => `<button class="category-tab ${category === cat.id ? 'active' : ''}" role="tab" aria-selected="${category === cat.id}" tabindex="${category === cat.id ? 0 : -1}" aria-controls="wardrobe-grid" id="tab-${cat.id}" data-category="${cat.id}">${A.icon(cat.icon)}<span>${A.esc(cat.label)}</span></button>`).join('');
    document.querySelectorAll('[data-collection]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.collection===collection)));
    $('#extras-filter').hidden=category!=='extras';
    document.querySelectorAll('[data-extra-filter]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.extraFilter===extraFilter)));
    const items = currentItems();
    $('#item-count').textContent = `${items.length} ${['hair','makeup'].includes(category) ? 'styles' : 'pieces'}`;
    $('#wardrobe-tip').textContent = category==='makeup'?'Face paint, cheek color, and smiles. Fresh face washes it off.':category==='extras'?'Tap a worn extra to take it off. Jewelry, a bag, and a pet can go together.':collection==='vip'?'Your VIP invitation: everything here is yours to wear.':'Drag a piece onto your character, or tap to wear.';
    grid.setAttribute('aria-label', G.CATEGORIES.find(cat => cat.id === category).label);
    grid.setAttribute('aria-labelledby', `tab-${category}`);
    grid.innerHTML = items.map(item => {
      const selected = makeupDraft&&category==='makeup'?makeupDraft.id===item.id:G.selection(outfit, item), color = category === 'hair' ? outfit.hairColor : pieceColor(item);
      const onBrush=makeupDraft&&category==='makeup',action=onBrush?'put on your brush':selected&&item.category==='extras'?'remove':'wear';
      return `<button class="item-card ${selected ? 'selected' : ''}" data-item="${item.id}" draggable="false" title="Drag ${A.esc(item.name)} onto your character, or click to ${action}" aria-pressed="${selected}" aria-label="${A.esc(item.name)}${selected ? onBrush?', on your brush':', wearing' : ''}"><div class="item-art">${A.thumbnail(item, color)}${selected ? `<span class="selected-tick">${A.icon('check')}</span>` : ''}${item.fresh?'<span class="new-piece">NEW</span>':''}<span class="color-dot" style="background:${color}"></span></div><span class="item-label"><span class="item-name">${A.esc(item.name)}</span><span class="item-detail">${A.esc(item.detail)}</span></span></button>`;
    }).join('') || '<p class="empty-collection">Try All extras to see what’s in this boutique.</p>';
    grid.scrollTop = scroll;
    const active = activePiece(), colors = category === 'hair' ? G.HAIR_COLORS : G.COLORS;
    const color = active ? pieceColor(active) : null;
    $('#color-bar').hidden = category==='makeup'&&active?.shape==='none';
    $('#color-label').textContent = category === 'hair' ? 'A little color for your hair' : category==='makeup'?'Choose your face-paint color':active ? `Color your ${active.name.toLowerCase()}` : 'Choose a piece to color';
    $('#color-name').textContent = colors.find(c => c.hex === color)?.name || '';
    $('#color-swatches').innerHTML = colors.map(c => `<button class="swatch ${c.hex === color ? 'active' : ''}" style="--swatch:${c.hex}" data-color="${c.hex}" title="${c.name}" aria-label="${c.name}" aria-pressed="${c.hex === color}" ${active ? '' : 'disabled'}></button>`).join('');
    $('#skin-bar').hidden = category !== 'hair';
    $('#skin-swatches').innerHTML = G.SKIN_TONES.map(c => `<button class="swatch ${c.hex === outfit.skin ? 'active' : ''}" style="--swatch:${c.hex}" data-skin="${c.hex}" title="${c.name} skin tone" aria-label="${c.name} skin tone" aria-pressed="${c.hex === outfit.skin}"></button>`).join('');
    if (focusItem) grid.querySelector(`[data-item="${focusItem}"]`)?.focus({ preventScroll: true });
    if (focusColor) $('#color-swatches').querySelector(`[data-color="${focusColor}"]`)?.focus({ preventScroll: true });
  }
  function changeOutfit(next) {
    history.push(G.clone(outfit));
    if (history.length > 40) history.shift();
    outfit = next; runwayDraft = null;
    renderAvatar(); renderWardrobe(); persist(); chime();
  }
  function chooseCategory(id, focus = false) {
    category = id; selectedId = null; extraFilter='all'; renderWardrobe(true);
    if(id==='makeup'&&!activityState)boutique?.setView('face');
    if (focus) $(`#tab-${id}`).focus();
  }
  function renderSound() {
    $('#sound-button').innerHTML = A.icon(sound ? 'sound' : 'muted');
    $('#sound-button').setAttribute('aria-label', `Turn sound ${sound ? 'off' : 'on'}`);
    $('#sound-button').title = `Turn sound ${sound ? 'off' : 'on'}`;
    $('#sound-button').setAttribute('aria-pressed', String(sound));
  }
  function renderTimer() {
    $('#timer-button').hidden = timer.mode === 'free';
    const remaining = timer.status === 'running' ? Math.max(0, timer.deadline - Date.now()) : timer.remaining;
    const seconds = timer.status === 'running' ? G.remainingSeconds(timer.deadline, Date.now()) : Math.ceil(remaining / 1000);
    $('#timer-value').textContent = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
    const action = timer.status === 'ready' ? 'Start' : timer.status === 'running' ? 'Pause' : timer.status === 'done' ? 'Again' : 'Resume';
    $('#timer-label').textContent = action;
    $('#timer-button').setAttribute('aria-label', `${action} timer, ${Math.floor(seconds / 60)} minutes ${seconds % 60} seconds left`);
    $('#timer-button').classList.toggle('urgent', seconds <= 30 && timer.status === 'running');
  }
  function pauseTimer() {
    if (timer.status !== 'running') return;
    timer.remaining = Math.max(0, timer.deadline - Date.now());
    timer.status = 'paused'; clearInterval(timer.interval); timer.interval = null;
    renderTimer();
  }
  function resetTimer() {
    clearInterval(timer.interval); timer.interval = null;
    timer.status = 'ready'; timer.remaining = 180000; timer.deadline = null; renderTimer();
  }
  function toggleTimer() {
    if (timer.status === 'running') { pauseTimer(); toast('Take your time. Resume whenever you’re ready.'); return; }
    if (timer.status === 'done') resetTimer();
    timer.deadline = Date.now() + timer.remaining; timer.status = 'running';
    timer.interval = setInterval(() => {
      renderTimer();
      if (Date.now() >= timer.deadline) {
        clearInterval(timer.interval); timer.interval = null; timer.remaining = 0; timer.status = 'done'; renderTimer();
        showRunway();
      }
    }, 250);
    renderTimer();
  }
  function chooseMode(mode) {
    timer.mode = mode; resetTimer();
    document.querySelectorAll('[data-mode]').forEach(button => { button.classList.toggle('active', button.dataset.mode === mode); button.setAttribute('aria-pressed', String(button.dataset.mode === mode)); });
    toast(mode === 'free' ? 'All the time in the world. Make something you love.' : 'Three minutes of magic! Tap Start on the timer when you’re ready.');
  }
  function openDialog(id) { pauseTimer(); const dialog = $(id); if (!dialog.open) dialog.showModal(); }
  function closeDialog(dialog) { if (dialog.open) dialog.close(); }
  function newTheme(nextId) {
    themeId = nextId; runwayDraft = null; resetTimer(); renderTheme(); persist();
  }
  function surpriseTheme() {
    const options = G.THEMES.filter(t => t.id !== themeId);
    newTheme(options[Math.floor(Math.random() * options.length)].id);
  }
  function showThemes() {
    $('#theme-grid').innerHTML = G.THEMES.map(t => `<button class="theme-option ${t.id === themeId ? 'active' : ''}" style="--theme-bg:${t.bg}" data-theme="${t.id}" aria-pressed="${t.id === themeId}"><span aria-hidden="true">${t.icon}</span><strong>${A.esc(t.name)}</strong><small>${A.esc(t.hint)}</small></button>`).join('');
    openDialog('#theme-dialog');
  }
  function showRunway() {
    pauseTimer();
    boutique?.leaveActivity();
    if (!runwayDraft) runwayDraft = { outfit: G.clone(outfit), pose, themeId, name: `${theme().name} daydream`, savedId: null };
    const result = G.score(runwayDraft.outfit, runwayDraft.themeId);
    $('#result-theme').textContent = theme().name;
    $('#result-stars').innerHTML = `${'★'.repeat(result.stars)}<span class="empty-star">${'☆'.repeat(5 - result.stars)}</span>`;
    $('#result-stars').setAttribute('aria-label', `${result.stars} out of 5 style stars`);
    $('#result-title').textContent = result.title;
    $('#result-description').textContent = result.description;
    $('#result-badges').innerHTML = result.badges.map(badge => `<span>✧ ${A.esc(badge)}</span>`).join('');
    $('#look-name').value = runwayDraft.name;
    $('#save-button').disabled = !!runwayDraft.savedId;
    $('#save-button').innerHTML = A.icon(runwayDraft.savedId ? 'check' : 'heart') + (runwayDraft.savedId ? 'Saved to lookbook' : 'Save look');
    $('#look-name').disabled = !!runwayDraft.savedId;
    $('#confetti').innerHTML = Array.from({ length: 32 }, (_, i) => `<span class="confetti-piece" style="--left:${(i * 37) % 100}%;--color:${['#bc8099', '#d1b374', '#f6e4d9', '#ae9ebc'][i % 4]};--duration:${2.8 + (i % 5) * .25}s;--delay:${(i % 8) * .16}s"></span>`).join('');
    openDialog('#runway-dialog');
    if (boutique) {
      try {
        runway3d ||= new window.Style3D.Runway($('#runway-avatar'), G.byId);
        runway3d.show(runwayDraft.outfit,runwayDraft.pose,boutique.companionLook());
      } catch (error) { console.error('Runway graphics:', error); $('#runway-avatar').innerHTML = A.avatar(runwayDraft.outfit, G.byId, { label: 'Your finished runway look' }); }
    } else $('#runway-avatar').innerHTML = A.avatar(runwayDraft.outfit, G.byId, { label: 'Your finished runway look' });
    chime('runway');
  }
  function saveLook(event) {
    event.preventDefault();
    if (!runwayDraft || runwayDraft.savedId) return;
    const name = $('#look-name').value.trim();
    if (!name) { $('#look-name').setCustomValidity('Give your look a little name first.'); $('#look-name').reportValidity(); return; }
    if (looks.length >= 40) { toast('Your lookbook has 40 looks! Download a favorite, then remove a look to make room.'); return; }
    const id = window.crypto?.randomUUID?.() || `look-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    looks.unshift({ id, name, themeId: runwayDraft.themeId, outfit: G.clone(runwayDraft.outfit), pose:runwayDraft.pose, date: new Date().toISOString() });
    runwayDraft.savedId = id; runwayDraft.name = name;
    const saved = persist(); updateCount();
    $('#save-button').disabled = true; $('#save-button').innerHTML = A.icon('check') + 'Saved to lookbook'; $('#look-name').disabled = true;
    toast(saved ? 'A little moment, saved! Find it in your lookbook.' : 'Added for this visit. Download it from your lookbook to keep it.'); chime('save');
  }
  function updateCount() { $('#look-count').textContent = String(looks.length); }
  function portraitMarkup(look) {
    if (!boutique) return A.avatar(look.outfit, G.byId, { label: look.name });
    const key = JSON.stringify([look.outfit,look.pose,look.photo]);
    try {
      if (!portraitCache.has(key)) {
        if (portraitCache.size >= 50) portraitCache.delete(portraitCache.keys().next().value);
        portraitCache.set(key, look.photo?window.Style3D.photo(look.outfit,G.byId,look.pose??1,look.photo):window.Style3D.portrait(look.outfit, G.byId,look.pose??1));
      }
      return `<img src="${portraitCache.get(key)}" alt="${A.esc(look.name)}" width="440" height="600">`;
    } catch { return A.avatar(look.outfit, G.byId, { label: look.name }); }
  }
  function renderLookbook() {
    const grid = $('#lookbook-grid'); updateCount();
    if (!looks.length) {
      grid.innerHTML = `<div class="empty-lookbook"><span>${A.icon('book')}</span><h2>Your story starts with a look.</h2><p>Take your outfit to the runway and save it here. There’s a whole world of looks waiting to happen.</p><button class="primary-button" data-view="studio">Create your first look ${A.icon('arrow')}</button></div>`;
      return;
    }
    grid.innerHTML = looks.map(look => {
      const t = G.THEMES.find(t => t.id === look.themeId);
      return `<article class="look-card ${look.photo?'is-photo':''}"><div class="look-card-preview" style="--look-bg:${t.bg}">${portraitMarkup(look)}</div><div class="look-card-info"><h3 title="${A.esc(look.name)}">${A.esc(look.name)}</h3><span class="look-theme">${look.photo?`Photo booth · ${A.esc(G.PHOTO_BACKGROUNDS.find(b=>b.id===look.photo.background).name)}`:`${A.esc(t.name)} · ${G.score(look.outfit, look.themeId).stars} style stars`}</span><div class="look-card-actions"><button class="text-button" data-wear="${look.id}">Style again ${A.icon('arrow')}</button><div><button class="icon-button" data-download="${look.id}" aria-label="Download ${A.esc(look.name)}" title="Download a picture">${A.icon('download')}</button><button class="icon-button" data-delete="${look.id}" aria-label="Remove ${A.esc(look.name)}" title="Remove this look">${A.icon('trash')}</button></div></div></div></article>`;
    }).join('');
  }
  function switchView(next) {
    view = next;
    if (next !== 'studio') pauseTimer();
    $('#studio-view').hidden = next !== 'studio'; $('#lookbook-view').hidden = next !== 'lookbook';
    boutique?.setActive(next === 'studio');
    document.querySelectorAll('.nav-button').forEach(button => { button.classList.toggle('active', button.dataset.view === next); if (button.dataset.view === next) button.setAttribute('aria-current', 'page'); else button.removeAttribute('aria-current'); });
    if (next === 'lookbook') renderLookbook();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
  function confirm(title, description, label, callback) {
    $('#confirm-title').textContent = title; $('#confirm-description').textContent = description; $('#confirm-action').textContent = label;
    confirmCallback = callback; openDialog('#confirm-dialog');
  }
  function downloadLook(look) {
    if (boutique) {
      try {
        const anchor = document.createElement('a');
        anchor.href = look.photo?window.Style3D.photo(look.outfit,G.byId,look.pose??1,look.photo):window.Style3D.portrait(look.outfit, G.byId,look.pose??1);
        anchor.download = `style-club-${look.name.replace(/[^a-z0-9]+/gi, '-').slice(0, 40) || 'my-look'}.png`;
        document.body.appendChild(anchor); anchor.click(); anchor.remove();
        toast('Your 3D outfit picture is ready to keep. Check your downloads.'); return;
      } catch { toast('Making an illustrated copy of your look.'); }
    }
    const svg = A.portrait(look.outfit, G.byId, look.name, G.THEMES.find(t => t.id === look.themeId));
    const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml;charset=utf-8' }));
    const anchor = document.createElement('a'); anchor.href = url; anchor.download = `style-club-${look.name.replace(/[^a-z0-9]+/gi, '-').slice(0, 40) || 'my-look'}.svg`;
    document.body.appendChild(anchor); anchor.click(); anchor.remove(); setTimeout(() => URL.revokeObjectURL(url), 10000);
    toast('Your outfit picture is ready to keep. Check your downloads.');
  }

  function activityChanged(activity){
    if(activity?.kind==='photo'){showPhotoBooth();return;}
    activityState=activity;makeupDraft=null;
    $('#activity-panel').hidden=!activity;$('#scene').classList.toggle('activity-active',!!activity);$('#beauty-tools').hidden=activity?.kind!=='beauty';
    if(!activity){renderWardrobe();return;}
    const copy={bench:['A little sit-down','Take a breather together. Your friend will come and sit beside you.'],salon:['The salon chair','Choose a hairstyle and color. See your new look in the salon mirror.'],beauty:['Brushes & blush','Choose a design and color, then drag a brush onto your face or tap Apply.'],mirror:['Your dressing mirror','Try a piece or change its color. The mirror shows your outfit and pose.']}[activity.kind];
    $('#activity-title').textContent=copy[0];$('#activity-copy').textContent=copy[1];
    if(activity.kind==='salon'){collection='';chooseCategory('hair');}
    if(activity.kind==='beauty'){
      category='makeup';const item=(outfit.makeup!=='fresh-face'&&G.byId[outfit.makeup])||G.ITEMS.find(i=>i.category==='makeup'&&!i.collection&&i.id!=='fresh-face');collection=item.collection||'';
      makeupDraft={id:item.id,color:outfit.makeup==='fresh-face'?item.color:outfit.makeupColor};selectedId=item.id;renderWardrobe(true);paintChoice();
    }
    if(activity.kind==='mirror'){collection=['vip','halloween'].includes(activity.storeId)?activity.storeId:'';chooseCategory(collection?'dresses':activity.storeId);}
  }
  function paintChoice(){if(makeupDraft)$('#paint-choice').textContent=`On your brush: ${G.byId[makeupDraft.id].name} · ${G.COLORS.find(c=>c.hex===makeupDraft.color)?.name||'your color'}`;}
  function applyPaint(wash=false){
    if(!makeupDraft)return;
    const id=wash?'fresh-face':makeupDraft.id;
    changeOutfit(G.recolor(G.wear(outfit,id),id,makeupDraft.color));
    toast(wash?'All fresh! Pick another design whenever you like.':`${G.byId[id].name} — a little brush of magic!`);
    boutique.canvas.dataset.appliedPaint=id;
  }
  function showShoppingFriends(){
    if(!boutique)return;
    $('#friend-picker').innerHTML=boutique.friendLooks().map(friend=>`<article class="friend-choice"><img src="${window.Style3D.portrait(friend.outfit,G.byId,2)}" alt="${friend.name}"><strong>${friend.name}</strong><button data-invite="${friend.name}">${boutique.companionLook()?.name===friend.name?'Shopping together':`Invite ${friend.name}`}</button></article>`).join('');
    openDialog('#friends-dialog');
  }
  function companionChanged(name){
    $('#companion-card').hidden=!name;$('#companion-name').textContent=name?`♡ Shopping with ${name}`:'';
    suggestion=null;$('#try-suggestion').hidden=true;
    if(name){friends=true;$('#friends-button').setAttribute('aria-pressed','true');$('#friends-button span').textContent='3 mall friends';}
  }
  const stickerImages=new Map();
  function photoChanged(){if(!photoDraft)return;photoDraft.savedId=null;$('#save-photo').disabled=!photoAvailable;$('#save-photo').textContent='Save photo to lookbook ♡';$('#photo-status').textContent='';}
  function photoOptions(){return{background:photoDraft.background,friends:photoFriends.filter(f=>photoDraft.friends.includes(f.name)),stickers:photoDraft.stickers};}
  function renderPhotoStickers(focusIndex=null){
    $('#photo-stickers').innerHTML=photoDraft.stickers.map((s,index)=>{
      if(!stickerImages.has(s.id))stickerImages.set(s.id,window.Style3D.stickerImage(s.id));
      return `<button class="photo-sticker" data-photo-sticker="${index}" aria-label="${G.PHOTO_STICKERS.find(p=>p.id===s.id).name} sticker ${index+1}; drag or use arrow keys" style="left:${s.x*100}%;top:${s.y*100}%;width:${s.size*100/0.86}%"><img src="${stickerImages.get(s.id)}" alt="" draggable="false"></button>`;
    }).join('');
    $('#sticker-count').textContent=`${photoDraft.stickers.length} / 12`;
    $('#remove-sticker').disabled=!photoDraft.stickers.length;
    if(focusIndex!==null)$(`[data-photo-sticker="${focusIndex}"]`)?.focus({preventScroll:true});
  }
  function renderPhotoBase(){
    photoAvailable=false;photoChanged();cancelAnimationFrame(photoFrame);
    photoFrame=requestAnimationFrame(()=>{
      try{const options={...photoOptions(),stickers:[]};$('#photo-image').src=window.Style3D.photo(photoDraft.outfit,G.byId,photoDraft.pose,options);photoAvailable=true;$('#save-photo').disabled=false;}
      catch(error){console.error('Photo booth:',error);$('#photo-status').textContent='The camera couldn’t make that picture. Try reopening the photo booth.';}
    });
    document.querySelectorAll('[data-photo-background]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.photoBackground===photoDraft.background)));
    document.querySelectorAll('[data-photo-friend]').forEach(button=>button.setAttribute('aria-pressed',String(photoDraft.friends.includes(button.dataset.photoFriend))));
  }
  function showPhotoBooth(){
    if(!boutique)return;
    photoFriends=boutique.friendLooks();photoDraft={outfit:G.clone(outfit),themeId,pose:pose||8,background:'rose',friends:boutique.companionLook()?[boutique.companionLook().name]:[],stickers:[],savedId:null};
    $('#photo-backgrounds').innerHTML=G.PHOTO_BACKGROUNDS.map(bg=>`<button data-photo-background="${bg.id}" aria-pressed="${bg.id==='rose'}" style="background:${bg.color};${bg.id==='stars'?'color:#fff7ed':''}"><span aria-hidden="true">${bg.icon}</span>${bg.name}</button>`).join('');
    $('#photo-friends').innerHTML=photoFriends.map(friend=>`<button data-photo-friend="${friend.name}" aria-pressed="${photoDraft.friends.includes(friend.name)}">${friend.name}</button>`).join('');
    $('#photo-pose').innerHTML=G.POSES.map((p,index)=>`<option value="${index}" ${index===photoDraft.pose?'selected':''}>${A.esc(p.name)}</option>`).join('');
    $('#sticker-picker').innerHTML=G.PHOTO_STICKERS.map(s=>`<button data-add-sticker="${s.id}" title="${s.name}" aria-label="Add ${s.name.toLowerCase()} sticker">${s.icon}</button>`).join('');
    $('#photo-name').value='A day at the mall';renderPhotoStickers();openDialog('#photo-dialog');renderPhotoBase();
  }
  function savePhoto(event){
    event.preventDefault();if(!photoDraft||!photoAvailable||photoDraft.savedId)return;
    if(looks.length>=40){$('#photo-status').textContent='Your lookbook has 40 looks. Keep a backup, then remove one to make room.';return;}
    const name=$('#photo-name').value.trim();if(!name){$('#photo-name').setCustomValidity('Give your photo a little name.');$('#photo-name').reportValidity();return;}
    const id=window.crypto?.randomUUID?.()||`photo-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
    const look={id,name,themeId:photoDraft.themeId,outfit:G.clone(photoDraft.outfit),pose:photoDraft.pose,photo:G.sanitizePhoto(photoOptions()),date:new Date().toISOString()};
    looks.unshift(look);photoDraft.savedId=id;const saved=persist();updateCount();$('#save-photo').disabled=true;$('#save-photo').textContent='Saved to lookbook ✓';$('#photo-status').textContent=saved?'Your moment is in My lookbook. Download it there, or keep creating!':'Saved for this visit. Download a lookbook backup to keep it.';chime('save');
  }
  function backupLooks(){
    const data=JSON.stringify({format:'style-club-lookbook',version:1,created:new Date().toISOString(),looks:G.sanitizeLooks(looks)},null,2);
    const url=URL.createObjectURL(new Blob([data],{type:'application/json'})),anchor=document.createElement('a');anchor.href=url;anchor.download=`style-club-lookbook-${new Date().toISOString().slice(0,10)}.json`;document.body.appendChild(anchor);anchor.click();anchor.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);toast('Keep this backup file. Restore it here to bring back your outfits and photos.');
  }
  async function restoreLooks(event){
    const file=event.target.files?.[0];if(!file)return;
    try{
      if(file.size>1000000)throw new Error('Choose a Style Club backup smaller than 1 MB.');
      const result=G.mergeLooks(looks,G.readBackup(await file.text()));looks=result.looks;const saved=persist();renderLookbook();
      toast(result.added?(saved?`Restored ${result.added} saved ${result.added===1?'look':'looks'}. Your existing looks are still here.`:'Restored for this visit. This browser cannot save right now; keep your backup file.'):'Those looks are already in your lookbook.');
    }catch(error){toast(error.message||'That backup could not be restored. Your existing looks are safe.');}
    finally{event.target.value='';}
  }
  function renderPoses() {
    $('#pose-picker').innerHTML=G.POSES.map((p,index)=>`<button data-pose="${index}" aria-pressed="${pose===index}"><span aria-hidden="true">${p.icon}</span>${A.esc(p.name)}</button>`).join('');
  }
  function choosePose(index) {
    pose=index;runwayDraft=null;boutique?.setPose(pose);if(!boutique)renderAvatar();renderPoses();chime();
    $(`[data-pose="${pose}"]`)?.focus({preventScroll:true});
  }
  function beginDrag(id,event,fromRack=false,kind='piece') {
    const item=Object.hasOwn(G.byId,id)?G.byId[id]:null;if(!item||!boutique)return;
    dragState={id,fromRack,kind};if(!fromRack)boutique.setDressDrag(true);
    $('#drag-preview').innerHTML=kind==='paint'?`<span style="font-size:45px">🖌</span><strong>${A.esc(item.name)}</strong>`:`${A.thumbnail(item,pieceColor(item))}<strong>${A.esc(item.name)}</strong>`;
    $('#drag-preview').hidden=false;$('#character-drop-target').hidden=false;$('#rack-hover').hidden=true;
    document.body.classList.add('dressing-drag');moveDrag(event);
  }
  function moveDrag(event) {
    if(!dragState||!event)return;
    const preview=$('#drag-preview'),bounds=boutique.dropBounds(),target=$('#character-drop-target');
    preview.style.left=`${event.clientX+15}px`;preview.style.top=`${event.clientY-35}px`;
    if(bounds){target.style.left=`${bounds.left}px`;target.style.top=`${bounds.top}px`;target.style.width=`${bounds.width}px`;target.style.height=`${bounds.height}px`;}
    target.classList.toggle('ready',boutique.isCharacterDrop(event.clientX,event.clientY));
  }
  function endDrag(event,canceled=false) {
    if(!dragState)return;
    const id=dragState.id,kind=dragState.kind,accepted=!canceled&&event&&boutique.isCharacterDrop(event.clientX,event.clientY);
    dragState=null;suppressClickUntil=performance.now()+400;boutique.setDressDrag(false);
    $('#drag-preview').hidden=true;$('#character-drop-target').hidden=true;document.body.classList.remove('dressing-drag');
    boutique.canvas.dataset.lastDrop=accepted?id:'canceled';
    if(accepted&&kind==='paint')applyPaint();
    else if(accepted){selectedId=id;category=G.byId[id].category;collection=G.byId[id].collection||'';extraFilter='all';changeOutfit(G.wear(outfit,id));if(category==='makeup'&&!activityState)boutique.setView('face');toast(`${G.byId[id].name} — looking lovely!`);}
    else if(!canceled)toast('Drop the piece over your character to wear it.');
  }
  document.addEventListener('pointerdown',event=>{
    const button=event.target.closest('[data-item],[data-brush]');if(!button||event.button!==0||!boutique||(event.pointerType==='touch'&&!button.dataset.brush))return;
    if(button.dataset.brush&&!makeupDraft)return;
    cardPointer={id:button.dataset.brush?makeupDraft.id:button.dataset.item,kind:button.dataset.brush?'paint':'piece',pointerId:event.pointerId,button,x:event.clientX,y:event.clientY};button.setPointerCapture(event.pointerId);
  });
  document.addEventListener('pointermove',event=>{
    if(!cardPointer||event.pointerId!==cardPointer.pointerId)return;
    if(!dragState&&Math.hypot(event.clientX-cardPointer.x,event.clientY-cardPointer.y)>6)beginDrag(cardPointer.id,event,false,cardPointer.kind);
    if(dragState){event.preventDefault();moveDrag(event);}
  });
  document.addEventListener('pointerup',event=>{if(!cardPointer)return;const current=cardPointer;cardPointer=null;if(current.button.hasPointerCapture(event.pointerId))current.button.releasePointerCapture(event.pointerId);if(dragState)endDrag(event);});
  document.addEventListener('pointercancel',()=>{cardPointer=null;endDrag(null,true);});
  window.addEventListener('blur',()=>{cardPointer=null;endDrag(null,true);});
  document.addEventListener('click',event=>{if(performance.now()<suppressClickUntil){event.preventDefault();event.stopImmediatePropagation();}},true);
  function syncFullscreen() {
    const expanded=!!document.fullscreenElement||document.body.classList.contains('fullscreen-game');
    $('#fullscreen-button').setAttribute('aria-label',expanded?'Exit full screen':'Full screen');
    $('#fullscreen-button').title=expanded?'Exit full screen':'Full screen';
    $('#fullscreen-button').innerHTML=`${expanded?'✕':'⛶'} <span>${expanded?'Exit full screen':'Full screen'}</span>`;
  }
  async function toggleFullscreen() {
    if(document.fullscreenElement){await document.exitFullscreen();return;}
    if(document.body.classList.contains('fullscreen-game')){document.body.classList.remove('fullscreen-game');syncFullscreen();return;}
    document.body.classList.add('fullscreen-game');syncFullscreen();
    try {if(document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen();}
    catch {toast('The game fills this window. Use Exit full screen to return.');}
  }
  document.addEventListener('fullscreenchange',()=>{document.body.classList.toggle('fullscreen-game',!!document.fullscreenElement);syncFullscreen();});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'){cardPointer=null;endDrag(null,true);if(!document.fullscreenElement&&!document.querySelector('dialog[open]')){document.body.classList.remove('fullscreen-game');syncFullscreen();}}});
  $('#fullscreen-button').addEventListener('click',toggleFullscreen);
  document.addEventListener('click', event => {
    const button = event.target.closest('button'); if (!button || button.disabled) return;
    const data = button.dataset;
    if(data.invite){boutique.invite(data.invite);closeDialog($('#friends-dialog'));toast(`${data.invite} is coming along! Pick a shop and explore together.`);}
    else if(data.activity){closeDialog($('#mall-dialog'));boutique?.startActivity(data.activity);toast('Let’s walk over. You can keep exploring whenever you like.');}
    else if(data.brush)toast('Your brush is ready. Drag it onto your character, tap your face, or choose Apply.');
    else if(data.photoBackground){photoDraft.background=data.photoBackground;renderPhotoBase();}
    else if(data.photoFriend){const name=data.photoFriend;photoDraft.friends=photoDraft.friends.includes(name)?photoDraft.friends.filter(f=>f!==name):[...photoDraft.friends,name];renderPhotoBase();}
    else if(data.addSticker){if(photoDraft.stickers.length>=12){$('#photo-status').textContent='Twelve stickers is a full sheet! Remove one to add another.';return;}photoDraft.stickers.push({id:data.addSticker,x:.14+(photoDraft.stickers.length%4)*.23,y:.18+Math.floor(photoDraft.stickers.length/4)*.24,size:.085});photoChanged();renderPhotoStickers(photoDraft.stickers.length-1);}
    else if (data.view) switchView(data.view);
    else if (data.mode) chooseMode(data.mode);
    else if (data.category) chooseCategory(data.category, true);
    else if (data.collection !== undefined) {collection=data.collection;extraFilter='all';selectedId=null;renderWardrobe(true);}
    else if (data.extraFilter) {extraFilter=data.extraFilter;selectedId=null;renderWardrobe(true);}
    else if (data.visit) {closeDialog($('#mall-dialog'));boutique?.visit(data.visit);toast(`Let’s walk to ${window.Style3D.STATIONS.find(s=>s.id===data.visit).name}.`);}
    else if (data.item) { selectedId = data.item;if(makeupDraft&&G.byId[data.item].category==='makeup'){makeupDraft.id=data.item;renderWardrobe();paintChoice();if(data.item==='fresh-face')applyPaint(true);}else changeOutfit(G.equip(outfit, data.item)); }
    else if (data.color) { const item = activePiece(); if (item) { selectedId = item.id;if(makeupDraft&&category==='makeup'){makeupDraft.color=data.color;renderWardrobe();paintChoice();}else changeOutfit(G.recolor(outfit, item.id, data.color)); } }
    else if (data.skin) { const next = G.clone(outfit); next.skin = data.skin; changeOutfit(next); $(`[data-skin="${data.skin}"]`).focus({ preventScroll: true }); }
    else if (data.pose !== undefined) choosePose(Number(data.pose));
    else if (data.theme) { newTheme(data.theme); closeDialog($('#theme-dialog')); toast(theme().hint); }
    else if (data.close !== undefined) closeDialog(button.closest('dialog'));
    else if (data.wear) {
      const look = looks.find(l => l.id === data.wear); if (!look) return;
      changeOutfit(G.clone(look.outfit));pose=look.pose??0;renderPoses();boutique?.setPose(pose); newTheme(look.themeId); switchView('studio'); toast('Your lovely look is back. Make it something new!');
    } else if (data.download) { const look = looks.find(l => l.id === data.download); if (look) downloadLook(look); }
    else if (data.delete) {
      const look = looks.find(l => l.id === data.delete); if (!look) return;
      confirm('Remove this look?', `“${look.name}” will leave your lookbook. Any picture you already downloaded will stay on your device.`, 'Remove look', () => { looks = looks.filter(l => l.id !== look.id); if (runwayDraft?.savedId === look.id) runwayDraft = null; persist(); renderLookbook(); toast('A little space for a new daydream.'); });
    }
  });
  $('.brand').addEventListener('click', event => { event.preventDefault(); switchView('studio'); });
  $('#theme-button').addEventListener('click', showThemes);
  $('#new-theme-button').addEventListener('click', () => { surpriseTheme(); toast(theme().hint); });
  $('#shuffle-button').addEventListener('click', () => { changeOutfit(G.randomOutfit(outfit)); toast('A happy little surprise. Make it your own!'); });
  $('#pose-button').addEventListener('click', () => {$('#pose-picker').hidden=!$('#pose-picker').hidden;$('#pose-button').setAttribute('aria-expanded',String(!$('#pose-picker').hidden));if(!$('#pose-picker').hidden){if(!activityState)boutique?.setView('fit');renderPoses();}});
  $('#undo-button').addEventListener('click', () => { if (!history.length) return; outfit = history.pop(); runwayDraft = null; renderAvatar(); renderWardrobe(); persist(); });
  $('#fresh-start-button').addEventListener('click', () => confirm('A fresh little start?', 'This resets your outfit. Your skin tone and saved looks will stay just as they are. You can undo this too.', 'Start fresh', () => { const next = G.defaultOutfit(); next.skin = outfit.skin; changeOutfit(next); pose = 0; renderPoses();boutique?.setPose(0); renderAvatar(); resetTimer(); }));
  $('#runway-button').addEventListener('click', showRunway);
  $('#back-to-style').addEventListener('click', () => closeDialog($('#runway-dialog')));
  $('#next-round').addEventListener('click', () => { closeDialog($('#runway-dialog')); surpriseTheme(); toast(`Your next chapter: ${theme().name}. Keep your look or dream up a new one!`); });
  $('#save-form').addEventListener('submit', saveLook);
  $('#look-name').addEventListener('input', () => { $('#look-name').setCustomValidity(''); if (runwayDraft) runwayDraft.name = $('#look-name').value; });
  $('#timer-button').addEventListener('click', toggleTimer);
  $('#help-button').addEventListener('click', () => openDialog('#help-dialog'));
  $('#grownups-button').addEventListener('click', () => openDialog('#grownups-dialog'));
  $('#outing-button').addEventListener('click',showShoppingFriends);
  $('#quiet-shopping').addEventListener('click',()=>{boutique?.dismissCompanion();closeDialog($('#friends-dialog'));});
  $('#dismiss-friend').addEventListener('click',()=>{boutique?.dismissCompanion();toast('See you around the mall!');});
  $('#suggest-button').addEventListener('click',()=>{suggestion=boutique?.suggest(themeId);$('#try-suggestion').hidden=!suggestion;if(suggestion)$('#try-suggestion').textContent=`Try ${G.byId[suggestion.id].name}`;});
  $('#try-suggestion').addEventListener('click',()=>{if(suggestion){selectedId=suggestion.id;category=G.byId[selectedId].category;collection=G.byId[selectedId].collection||'';changeOutfit(G.wear(outfit,selectedId));toast('A lovely idea from your shopping friend!');}});
  $('#leave-activity').addEventListener('click',()=>{boutique?.leaveActivity();boutique?.canvas.focus({preventScroll:true});});
  $('#apply-paint').addEventListener('click',()=>applyPaint());$('#wash-paint').addEventListener('click',()=>applyPaint(true));
  $('#photo-pose').addEventListener('change',()=>{photoDraft.pose=Number($('#photo-pose').value);renderPhotoBase();});
  $('#photo-name').addEventListener('input',()=>{$('#photo-name').setCustomValidity('');photoChanged();});
  $('#photo-save-form').addEventListener('submit',savePhoto);
  $('#remove-sticker').addEventListener('click',()=>{photoDraft.stickers.pop();photoChanged();renderPhotoStickers();});
  let stickerPointer=null;
  $('#photo-stickers').addEventListener('pointerdown',event=>{const button=event.target.closest('[data-photo-sticker]');if(!button||event.button!==0)return;event.preventDefault();button.focus({preventScroll:true});stickerPointer={index:Number(button.dataset.photoSticker),button,id:event.pointerId};button.setPointerCapture(event.pointerId);});
  $('#photo-stickers').addEventListener('pointermove',event=>{if(!stickerPointer||event.pointerId!==stickerPointer.id)return;const rect=$('#photo-preview').getBoundingClientRect(),sticker=photoDraft.stickers[stickerPointer.index];sticker.x=Math.max(.04,Math.min(.96,(event.clientX-rect.left)/rect.width));sticker.y=Math.max(.04,Math.min(.96,(event.clientY-rect.top)/rect.height));stickerPointer.button.style.left=`${sticker.x*100}%`;stickerPointer.button.style.top=`${sticker.y*100}%`;photoChanged();});
  for(const type of['pointerup','pointercancel'])$('#photo-stickers').addEventListener(type,()=>{if(stickerPointer){const {button,id}=stickerPointer;if(button.hasPointerCapture(id))button.releasePointerCapture(id);stickerPointer=null;}});
  $('#photo-stickers').addEventListener('keydown',event=>{const button=event.target.closest('[data-photo-sticker]');if(!button)return;const index=Number(button.dataset.photoSticker),sticker=photoDraft.stickers[index],steps={ArrowLeft:[-.02,0],ArrowRight:[.02,0],ArrowUp:[0,-.02],ArrowDown:[0,.02]};if(steps[event.key]){event.preventDefault();sticker.x=Math.max(.04,Math.min(.96,sticker.x+steps[event.key][0]));sticker.y=Math.max(.04,Math.min(.96,sticker.y+steps[event.key][1]));}else if(['Delete','Backspace'].includes(event.key)){event.preventDefault();photoDraft.stickers.splice(index,1);}else return;photoChanged();renderPhotoStickers(Math.min(index,photoDraft.stickers.length-1));});
  $('#backup-looks').addEventListener('click',backupLooks);$('#restore-looks').addEventListener('click',()=>$('#backup-file').click());$('#backup-file').addEventListener('change',restoreLooks);
  $('#sound-button').addEventListener('click', () => { sound = !sound; renderSound(); chime(); });
  $('#confirm-action').addEventListener('click', () => { const action = confirmCallback; confirmCallback = null; closeDialog($('#confirm-dialog')); action?.(); });
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.addEventListener('click', event => { if (event.target !== dialog) return; const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog(dialog); });
    dialog.addEventListener('close', () => { if (dialog.id === 'confirm-dialog') confirmCallback = null; if (dialog.id === 'runway-dialog') runway3d?.hide();if(dialog.id==='photo-dialog'){cancelAnimationFrame(photoFrame);stickerPointer=null;} });
  });
  $('#category-tabs').addEventListener('keydown', event => {
    const categories=availableCategories(),index = categories.findIndex(c => c.id === category);
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % categories.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + categories.length) % categories.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = categories.length - 1;
    if (next !== undefined) { event.preventDefault(); chooseCategory(categories[next].id, true); }
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) pauseTimer(); });
  window.addEventListener('pagehide', () => { pauseTimer(); persist(); });
  window.addEventListener('storage', event => {
    if (event.key !== STORAGE_KEY) return;
    try { const raw = JSON.parse(event.newValue); looks = raw?.version === 1 ? G.sanitizeLooks(raw.looks) : []; updateCount(); if (view === 'lookbook') renderLookbook(); }
    catch { /* Keep this tab's playable state if another tab stored malformed data. */ }
  });
  function initWorld() {
    try {
      boutique = new window.Style3D.Boutique($('#avatar'), {
        catalog: G.byId,game:G,
        onCompanion:companionChanged,onActivity:activityChanged,onPaint:applyPaint,
        onGrab(id,event){beginDrag(id,event,true);},onDrag:moveDrag,onDrop:endDrag,
        onHover(id){const hint=$('#rack-hover');hint.hidden=!id||!!dragState;if(id)hint.textContent=`Drag ${G.byId[id].name} onto your character`;},
        onStation(station,{browse=false}={}) {
          if (station.id === 'runway') { showRunway(); return; }
          collection=station.collection||'';chooseCategory(station.category);
          toast(browse?`${station.name} — pick something you love in the dressing room.`:`${station.name} — drag a piece from a display onto yourself!`);
          if (browse&&window.innerWidth <= 700) $('#wardrobe').scrollIntoView({ behavior: 'smooth', block: 'start' });
        },
        onNearby(station) {
          $('#nearby-button').hidden = !station;
          $('#nearby-label').textContent = station?.kind?`Use ${station.name.toLowerCase()}`:station?.id === 'runway' ? 'Walk the runway' : `Try ${station?.name.toLowerCase() || 'a rack'}`;
        },
        onLocation(store){$('#mall-location').textContent=store?.name||'The promenade';},
        onFriend(name){$('#friend-actions').hidden=!name;$('#greet-button').textContent=name?`Say hi to ${name}`:'Say hi';},
        onBubble(speech){const bubble=$('#friend-bubble');bubble.hidden=!speech;if(!speech)return;
          const key=speech.name+speech.text;if(bubble.dataset.message!==key){bubble.dataset.message=key;bubble.innerHTML=`<strong>${A.esc(speech.name)}</strong><span>${A.esc(speech.text)}</span>`;}
          bubble.style.left=`${speech.left}%`;bubble.style.top=`${speech.top}%`;
        },
        onTogether(style){pose=style;runwayDraft=null;renderPoses();toast('A little fashion moment with your friend!');},
        onView(mode) {
          for (const [id, value] of [['explore-button','walk'],['outfit-view-button','fit'],['face-view-button','face']]) {
            $(`#${id}`).classList.toggle('active', mode === value); $(`#${id}`).setAttribute('aria-pressed', String(mode === value));
          }
          $('#world-hint').textContent = mode === 'walk' ? 'Pick a shop on the map · drag clothes onto yourself' : mode==='face'?'Choose makeup · drag to turn your face':'Drag to turn · your pose returns after walking';
          $('#scene').classList.toggle('fitting-view', mode !== 'walk');$('#rack-hover').hidden=true;
        }
      });
      $('#explore-button').addEventListener('click', () => { boutique.setView('walk'); boutique.canvas.focus({ preventScroll: true }); });
      $('#outfit-view-button').addEventListener('click', () => boutique.setView('fit'));
      $('#face-view-button').addEventListener('click', () => boutique.setView('face'));
      $('#friends-button').addEventListener('click', () => {friends=!friends;boutique.setFriends(friends);$('#friends-button').setAttribute('aria-pressed',String(friends));$('#friends-button span').textContent=friends?'3 mall friends':'A quiet mall';});
      const storeOrder=['dresses','shoes','makeup','hair','tops','bottoms','halloween','vip'];
      $('#mall-stores').innerHTML=storeOrder.map(id=>{const store=window.Style3D.STORES.find(s=>s.id===id);return `<button class="mall-store" data-visit="${store.id}" style="--store-color:${store.color}"><span aria-hidden="true">${store.collection==='vip'?'♛':store.collection==='halloween'?'☾':A.icon(G.CATEGORIES.find(c=>c.id===store.id)?.icon||'sparkles')}</span><strong>${A.esc(store.name)}</strong><small>${A.esc(store.detail)}</small></button>`;}).join('');
      $('#mall-dialog .map-note').insertAdjacentHTML('beforebegin','<div class="activity-shortcuts"><button data-activity="salon">Salon chair</button><button data-activity="beauty">Makeup vanity</button><button data-activity="mirror">Dressing mirror</button><button data-activity="bench">Sit together</button><button data-activity="photo">Photo booth</button></div>');
      $('#mall-map-button').addEventListener('click',()=>openDialog('#mall-dialog'));
      $('#greet-button').addEventListener('click',()=>boutique.greet());
      $('#together-button').addEventListener('click',()=>boutique.poseTogether());
      $('#turn-left-button').addEventListener('click', () => boutique.turn(-Math.PI / 4));
      $('#turn-right-button').addEventListener('click', () => boutique.turn(Math.PI / 4));
      $('#front-view-button').addEventListener('click', () => boutique.resetCamera());
      $('#nearby-button').addEventListener('click', () => boutique.interact());
      document.querySelectorAll('[data-move]').forEach(button => {
        const direction = button.dataset.move;
        button.addEventListener('pointerdown', event => { event.preventDefault(); button.setPointerCapture(event.pointerId); boutique.setMove(direction, true); });
        for (const event of ['pointerup','pointercancel','lostpointercapture']) button.addEventListener(event, () => boutique.setMove(direction, false));
        button.addEventListener('keydown', event => { if (event.key === ' ' || event.key === 'Enter') { event.preventDefault(); boutique.setMove(direction, true); } });
        button.addEventListener('keyup', () => boutique.setMove(direction, false));
        button.addEventListener('blur', () => boutique.setMove(direction, false));
      });
    } catch (error) {
      console.error('3D graphics unavailable:', error); boutique = null;
      $('#graphics-status').hidden = false;
      $('#graphics-status').textContent = '3D graphics could not start. Try opening the game in a recent Chrome or Edge browser.';
      $('#scene').classList.add('graphics-fallback');
    }
  }
  injectIcons(); initWorld(); renderAvatar(); renderTheme(); renderWardrobe(); renderTimer(); renderSound(); renderPoses(); updateCount();
  $('#new-theme-button').innerHTML = A.icon('shuffle'); $('#help-button').innerHTML = A.icon('help');
  if (storageWarning) toast('Saving isn’t available right now. You can still play and download your looks.');
})();
