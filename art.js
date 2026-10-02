(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.StyleArt = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  let sequence = 0;
  const esc = value => String(value).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[ch]));
  function mix(hex, amount) {
    const parts = hex.replace('#', '').match(/.{2}/g).map(v => parseInt(v, 16));
    return '#' + parts.map(v => Math.round(amount > 0 ? v + (255 - v) * amount : v * (1 + amount)).toString(16).padStart(2, '0')).join('');
  }
  const path = (d, fill, stroke, width = 1.5, extra = '') => `<path d="${d}" fill="${fill}"${stroke ? ` stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"` : ''} ${extra}/>`;
  const ellipse = (cx, cy, rx, ry, fill, extra = '') => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}" ${extra}/>`;
  const circle = (cx, cy, r, fill) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"/>`;
  function flower(x, y, r, color = '#fff5dd') {
    return `<g transform="translate(${x} ${y})">${[0, 72, 144, 216, 288].map(a => `<ellipse cy="-${r * .58}" rx="${r * .37}" ry="${r * .55}" fill="${color}" transform="rotate(${a})"/>`).join('')}${circle(0, 0, r * .29, '#e5bd64')}</g>`;
  }
  function star(x, y, r, color = '#fff2be') { return path(`M${x} ${y-r} L${x+r*.26} ${y-r*.25} L${x+r} ${y} L${x+r*.26} ${y+r*.25} L${x} ${y+r} L${x-r*.26} ${y+r*.25} L${x-r} ${y} L${x-r*.26} ${y-r*.25}Z`, color); }
  function bow(x, y, size, color) {
    return `<g transform="translate(${x} ${y}) scale(${size})">${path('M0 0 Q-11-15-20-12 Q-25-1-19 9 Q-9 10 0 0 M0 0 Q11-15 20-12 Q25-1 19 9 Q9 10 0 0', color, mix(color,-.18),1)}${path('M-3 3 L-13 23 L-3 19 L1 24 L4 4 L12 22 L15 17 L23 20 L7 2', color, mix(color,-.12),1)}${ellipse(1,0,5,6,mix(color,.12))}${path('M-6-2L-17-6 M7-2L17-6', 'none',mix(color,-.16),1)}</g>`;
  }
  function material(color, prefix) {
    return `<defs><linearGradient id="${prefix}" x1="0" x2="1" y1="0" y2=".45"><stop stop-color="${mix(color,-.13)}"/><stop offset=".32" stop-color="${mix(color,.13)}"/><stop offset=".64" stop-color="${color}"/><stop offset="1" stop-color="${mix(color,-.18)}"/></linearGradient></defs>`;
  }
  function garment(item, color, prefix) {
    const c = color || item.color, dark = mix(c,-.22), light = mix(c,.42), fill = `url(#${prefix})`;
    const bases={rainbow:'cloud',cosmic:'gown',butterfly:'meadow',cupcake:'cloud',bomber:'hoodie',denim:'sweater',stripes:'tee',varsity:'sweater',cargo:'trousers',flare:'trousers','star-skirt':'pleated',laceboot:'boot',hightop:'sneaker',velvet:'gown',pearl:'gown',aurora:'gown',diamond:'petal',tweed:'denim',tuxedo:'blouse',palazzo:'flare',sequin:'star-skirt',pearlshoe:'maryjane',diamondboot:'starboot',royalcrown:'tiara',quiltedbag:'bag',starcape:'cape',witch:'gown',pumpkin:'petal',ghost:'cloud',vampire:'gown',skeleton:item.category==='tops'?'sweater':'trousers',pumpkinhat:'beret',pumpkinbag:'bag',stripeboot:'boot',cherry:'meadow',plaid:'bow',raincoat:'bomber',sport:'tee',ribbonshoe:'maryjane'};
    if(bases[item.shape]) {
      let art=garment({...item,shape:bases[item.shape]},c,prefix);
      if(item.shape==='rainbow') ['#bda5d8','#8eafd1','#83bfb7','#edcc82',c].forEach((tint,i)=>{const y=299-i*18;art+=path(`M${69+i*5} ${y}Q120 ${y+18} ${171-i*5} ${y}`,'none',tint,14);});
      if(item.shape==='cupcake') for(const y of [240,270,299])art+=path(`M${96-(y-210)*.3} ${y} Q120 ${y+26} ${144+(y-210)*.3} ${y}`,'none',light,9);
      if(item.shape==='butterfly')for(const[x,y]of[[103,247],[135,276],[116,299]])art+=ellipse(x-4,y,5,7,'#e2aecb')+ellipse(x+4,y,5,7,'#bda5d8')+path(`M${x} ${y-5}v10`,'none','#e1bf72',1.5);
      if(item.shape==='stripes')for(const y of[167,180,193,206])art+=path(`M98 ${y}Q120 ${y+5} 142 ${y}`,'none','#fff6e8',5);
      if(['denim','bomber','varsity'].includes(item.shape)) {
        art+=path('M120 155v58','none',light,2)+path('M101 178h12v13h-12Z M128 178h12v13h-12Z',light,dark,.7);
        if(item.shape==='varsity'||item.shape==='bomber')art+=star(108,167,6);
      }
      if(item.shape==='cargo')art+=path('M85 257h18v24H85Z M137 257h17v24h-17Z',light,dark,1);
      if(item.shape==='flare')art+=path('M84 331L74 406h38l2-75 M126 331l2 75h38l-11-75',fill,dark,1);
      if(item.shape==='star-skirt')for(const[x,y]of[[98,245],[132,255],[113,285],[153,286]])art+=star(x,y,6);
      if(item.shape==='laceboot')for(const side of[0,44])for(const y of[375,387,399])art+=path(`M${88+side} ${y}l12 7m-12 0 12-7`,'none',light,1.5);
      if(['velvet','pearl','diamond','aurora'].includes(item.shape)){
        for(const[x,y]of[[104,179],[137,191],[100,261],[143,282],[91,330],[126,359],[162,372]])art+=item.shape==='pearl'?circle(x,y,3,'#fff6e7'):star(x,y,5,'#fff3d8');
        if(item.shape==='aurora')for(const[y,tint]of[[299,'#8eafd1'],[333,'#bda5d8'],[368,'#db91a5']])art+=path(`M${90-(y-290)*.42} ${y}Q120 ${y+22} ${150+(y-290)*.42} ${y}`,'none',tint,15);
      }
      if(['tweed','plaid'].includes(item.shape)){for(const x of[106,120,134])art+=path(`M${x} 159v47`,'none',light,2);for(const y of[173,187,201])art+=path(`M99 ${y}h43`,'none',light,2);if(item.shape==='plaid')for(const y of[238,261,284])art+=path(`M${96-(y-215)*.25} ${y}H${144+(y-215)*.25}`,'none',light,5);}
      if(item.shape==='tuxedo')art+=path('M99 155L116 197L105 177L100 176Z M141 155L124 197L135 177L140 176Z',light)+bow(120,159,.25,'#d8c4a2');
      if(item.shape==='skeleton'){
        if(item.category==='tops'){art+=path('M120 166v39','none','#f3e8d8',4);for(const y of[176,188,200])art+=path(`M103 ${y-3}Q120 ${y+6} 137 ${y-3}`,'none','#f3e8d8',4);}
        else for(const x of[98,142])for(const y of[245,326])art+=path(`M${x} ${y}v57`,'none','#f3e8d8',8)+circle(x,y,6,'#f3e8d8')+circle(x,y+57,6,'#f3e8d8');
      }
      if(['pumpkin','ghost'].includes(item.shape)){for(const x of[111,131])art+=ellipse(x,181,4,7,'#594551');art+=path('M111 196Q121 204 131 196','none','#594551',3);}
      if(item.shape==='witch')for(const y of[166,179,192])art+=path(`M111 ${y}l18 10m-18 0 18-10`,'none','#e8c66f',2);
      if(item.shape==='vampire')art+=path('M102 154L82 130L86 163L106 171 M138 154L158 130L154 163L134 171',dark);
      if(item.shape==='cherry')for(const[x,y]of[[106,177],[101,245],[137,268],[107,294]])art+=circle(x-3,y,4,'#b05b69')+circle(x+4,y+1,4,'#b05b69')+path(`M${x-3} ${y-3}l5-9 2 10`,'none','#78956a',1.5);
      if(item.shape==='pumpkinhat')art+=path('M121 27q-7-12 5-17','none','#76945b',6)+ellipse(131,25,11,4,'#809e65');
      if(item.shape==='pumpkinbag')art+=ellipse(179,254,3,4,'#594551')+ellipse(196,254,3,4,'#594551')+path('M177 269q10 9 20 0','none','#594551',3);
      if(item.shape==='quiltedbag')for(const y of[249,261,273])art+=path(`M171 ${y}l25-10m-25 0 25 10`,'none',light,1);
      if(item.shape==='pearlshoe')for(const x of[88,96,137,145])art+=circle(x,416,3,'#fff8e9');
      if(item.shape==='ribbonshoe')art+=bow(92,417,.24,light)+bow(148,417,.24,light);
      if(item.shape==='stripeboot')for(const x of[84,132])for(const y of[375,388,401])art+=path(`M${x} ${y}h22`,'none',light,5);
      return art;
    }
    let s = material(c,prefix);
    if (item.category === 'dresses') {
      const long = item.shape === 'gown';
      const skirt = long ? 'M96 207 Q120 214 144 207 Q155 281 202 383 Q165 407 120 405 Q73 407 38 383 Q82 280 96 207Z' : item.shape === 'sun' || item.shape === 'sailor' ? 'M96 207 L144 207 Q152 252 166 305 Q120 323 74 305 Q85 253 96 207Z' : 'M96 207 L144 207 Q155 251 180 306 Q171 315 160 310 Q149 321 137 315 Q122 325 107 316 Q94 322 81 313 Q69 317 60 307 Q83 257 96 207Z';
      s += path(skirt,fill,dark,1.4);
      s += path(long ? 'M103 220Q96 310 77 386 M115 221Q110 326 108 395 M137 220Q146 318 169 388 M127 222Q127 320 133 396' : 'M105 222Q100 265 88 305 M116 223L112 313 M131 222Q135 269 146 309 M140 222Q151 271 167 301','none',dark,1.1,'opacity=".3"');
      if (['petal','cloud','bow','gown'].includes(item.shape)) {
        s += path('M94 148 Q77 142 72 157 Q67 171 80 181 L96 178 L102 153 M146 148 Q163 142 168 157 Q173 171 160 181 L144 178 L138 153',fill,dark,1.2);
        s += path('M76 174Q84 178 95 173 M145 173Q156 178 164 174','none',light,2);
      }
      s += path('M96 148 L106 144 Q120 158 134 144 L144 148 L151 166 Q142 185 144 208 Q120 216 96 208 Q98 185 89 166Z',fill,dark,1.3);
      s += path('M107 149Q120 164 133 149','none',light,2);
      s += path('M99 175Q103 190 102 202 M141 175Q137 190 138 202','none',dark,1,'opacity=".35"');
      s += path('M96 205Q120 211 144 205 L145 212Q120 218 95 212Z',light,dark,.5);
      if (item.shape === 'petal' || item.shape === 'meadow') {
        for (const [x,y,r] of [[107,169,5],[130,186,4],[98,237,6],[139,243,6],[118,270,6],[83,289,5],[153,291,6],[112,299,4]]) s += flower(x,y,r);
        s += bow(121,211,.4,light);
      }
      if (item.shape === 'cloud') {
        for (const y of [245,273,300]) s += path(`M${96-(y-210)*.32} ${y} Q120 ${y+19} ${144+(y-210)*.32} ${y}`,'none',light,5,'opacity=".62"');
        s += path('M99 161Q120 177 141 161','none',light,3);
      }
      if (item.shape === 'bow') { s += bow(120,163,.62,light); s += path('M84 292Q120 307 156 292','none',light,6); }
      if (['star','gown'].includes(item.shape)) {
        for (const [x,y,r] of [[110,172,4],[131,190,3],[99,241,5],[132,252,4],[117,278,5],[151,288,4],[82,291,3]]) s += star(x,y,r);
        if(long) { for(const [x,y,r] of [[77,344,5],[113,360,6],[149,339,4],[169,375,6]]) s += star(x,y,r); s += path('M53 376Q120 400 187 376','none','#fff5dc',2); }
      }
      if (item.shape === 'sun') { s += path('M97 161L96 208 M143 161L144 208','none',dark,1); for (const y of [170,185,198]) s += circle(120,y,2,'#fff1ca'); s += path('M91 256Q103 263 112 255L111 273Q101 281 91 272 M130 255Q140 263 150 256L150 272Q140 281 130 273',light,dark,.8); }
      if (item.shape === 'sailor') { s += path('M104 143L120 160L136 143L144 153L120 178L96 153Z','#f8f2e8',dark,1); s += bow(120,176,.4,'#5e6586'); s += path('M80 294Q120 310 160 294','none','#f8f2e8',6); }
    }
    if (item.category === 'tops') {
      const sleeve = ['sweater','hoodie'].includes(item.shape);
      s += path(sleeve ? 'M94 147L79 151Q65 173 54 218L72 224L93 179 M146 147L161 151Q175 173 186 218L168 224L147 179' : 'M96 148L80 151L66 177L85 185L100 166 M144 148L160 151L174 177L155 185L140 166',fill,dark,1.4);
      s += path('M96 148L107 143Q120 156 133 143L144 148L147 174L142 212Q121 223 98 214L94 175Z',fill,dark,1.3);
      if(item.shape==='tee') { s+=path('M107 147Q120 162 133 147','none',light,3); s+=flower(120,180,11,'#f3cb71'); }
      if(item.shape==='blouse') { s+=path('M104 145L119 157L109 171L96 155 M136 145L121 157L131 171L144 155','#fff6e8',dark,.6); s+=bow(120,160,.25,c); for(const y of [176,188,200]) s+=circle(120,y,1.7,'#fff7e9'); }
      if(item.shape==='sweater') { s+=path('M106 145Q120 155 134 145L132 156Q120 163 108 156Z',light,dark,.5); s+=path('M99 205Q120 214 142 205 M57 212L73 217 M167 217L183 212','none',light,5); for(const x of [103,114,126,137]) s+=path(`M${x} 170v29`,'none',light,1,'opacity=".5"'); }
      if(item.shape==='hoodie') { s+=path('M105 143Q120 150 135 143L146 153Q120 178 94 153Z',light,dark,1); s+=path('M104 188L136 188L142 201Q120 213 98 201Z',c,dark,1); s+=path('M111 161L109 184 M129 161L132 184','none','#fff4e6',2); }
      if(item.shape==='vest') { s+=path('M96 148L105 145L120 175L135 145L144 148L144 212Q120 221 96 212Z',c,dark,1); s+=path('M105 146L120 177L135 146','none','#f1dcc3',4); for(const [x,y] of [[108,185],[131,185],[120,204]]) s+=path(`M${x} ${y-8}l7 8-7 8-7-8Z`,light); }
      if(item.shape==='sparkle') for(const [x,y] of [[106,169],[132,175],[117,192],[137,203]]) s+=star(x,y,5);
    }
    if(item.category==='bottoms') {
      if(['jeans','trousers','shorts'].includes(item.shape)) {
        const y=item.shape==='shorts'?277:405;
        s+=path(`M94 214Q120 220 146 214L153 247L158 ${y}L130 ${y}L120 ${item.shape==='shorts'?247:271}L110 ${y}L81 ${y}L87 247Z`,fill,dark,1.5);
        s+=path(`M98 222L93 ${y-8} M141 222L147 ${y-8}`,'none',light,1.8,'opacity=".5"');
        s+=path('M89 232Q107 243 109 221 M131 221Q135 242 151 232 M119 221L119 245','none',dark,1);
        s+=path('M92 215Q120 221 148 215','none',dark,5); s+=circle(121,220,2,'#e6c37c');
        if(item.shape==='shorts') s+=path('M82 271L109 273 M131 273L157 271','none',light,7);
      } else {
        s+=path('M95 214Q120 220 145 214Q151 261 172 293Q120 313 68 293Q89 262 95 214Z',fill,dark,1.3);
        for(const x of [92,105,119,133,146]) s+=path(`M${x} 224L${120+(x-120)*1.55} 293`,'none',dark,1.3,'opacity=".4"');
        s+=path('M95 215Q120 220 145 215','none',light,6);
        if(item.shape==='tutu') { s+=path('M86 249Q120 268 154 249 M78 273Q120 291 162 273 M71 291Q120 311 169 291','none',light,7,'opacity=".6"'); s+=bow(121,220,.42,light); }
        if(item.shape==='flower') for(const [x,y]of[[103,242],[139,257],[92,282],[122,281],[153,288]])s+=flower(x,y,6);
      }
    }
    if(item.category==='shoes') {
      for(const flip of [false,true]) {
        s+=`<g${flip?' transform="translate(240 0) scale(-1 1)"':''}>`;
        if(['blockheel','sparkleheel'].includes(item.shape)){
          s+=path('M102 416L110 416L110 433L104 433Z',dark)+path('M68 429Q64 421 79 417L86 399Q98 410 107 401L112 414Q98 418 91 430Z',fill,dark,1.4);
          s+=path('M85 402Q97 410 108 403','none',light,3);
          if(item.shape==='blockheel')s+=bow(78,419,.25,light);else s+=star(79,421,5,'#fff0bc');
        } else if(['boot','starboot'].includes(item.shape)) {
          s+=path('M85 364L108 364L108 413Q113 424 105 430L70 430Q61 426 69 417L82 411Z',fill,dark,1.4);
          s+=path('M87 365L106 365','none',light,4);s+=path('M71 429L105 429','none',dark,4);
          if(item.shape==='starboot')s+=star(96,386,7);else s+=path('M90 377L101 377 M88 388L101 388 M87 400L102 400','none',light,2);
        } else {
          s+=path('M82 408Q93 413 107 406L111 421Q112 430 101 432L70 431Q61 426 67 419Z',fill,dark,1.3);
          if(item.shape==='maryjane') { s+=path('M81 411Q93 423 106 410',mix(c,.6),dark,.7);s+=path('M78 416L105 416','none',dark,3);s+=circle(103,416,2,'#efd491'); }
          if(item.shape==='sneaker') { s+=path('M68 426Q88 429 109 425','none','#fff8ed',5);s+=path('M83 413L96 415 M79 418L94 420','none','#fff8ed',2); }
          if(item.shape==='sandal') {s+=path('M84 408L96 425 M106 410L78 426','none','#fff0c5',4);s+=flower(91,419,4);}
          if(item.shape==='slipper') {s+=ellipse(88,421,18,10,light);s+=ellipse(78,411,4,9,light);s+=ellipse(89,409,4,10,light);s+=circle(80,420,1.4,dark);s+=circle(91,420,1.4,dark);}
        }
        s+='</g>';
      }
    }
    if(item.category==='extras') {
      if(item.slot==='pet'){
        s+=ellipse(79,224,27,33,fill)+ellipse(79,188,27,24,fill);
        if(item.shape==='petrabbit')s+=ellipse(64,155,8,24,c)+ellipse(90,155,8,24,c)+ellipse(64,155,3,18,light)+ellipse(90,155,3,18,light);
        else if(['petcat','petroyalcat'].includes(item.shape))s+=path('M55 178L54 151L72 167 M86 167L105 151L103 179',fill,dark,1);
        else s+=ellipse(54,185,10,20,c)+ellipse(104,185,10,20,c);
        for(const x of[68,90])s+=ellipse(x,188,3,4,'#493844')+circle(x+1,187,1,'#fff7ed');
        s+=ellipse(79,200,9,6,light)+ellipse(79,197,4,3,'#594555')+ellipse(58,237,10,12,c)+ellipse(99,237,10,12,c)+bow(99,173,.28,'#d8a0b7');
        if(item.shape==='petpoodle')for(const[x,y]of[[55,164],[68,161],[81,160],[95,164],[52,190],[107,190]])s+=circle(x,y,8,light);
        if(item.shape==='petroyalcat')s+=path('M67 166L65 149L76 156L81 144L88 156L98 149L94 166Z','#e5c56e');
      }
      if(['heartnecklace','gemnecklace'].includes(item.shape)){
        s+=path('M98 145Q102 173 120 174Q138 173 142 145','none','#cfad65',2);
        s+=item.shape==='gemnecklace'?path('M120 170l7 8-7 11-7-11Z',c,dark,1):path('M120 186Q104 176 112 172Q118 169 120 175Q123 169 129 173Q136 179 120 186Z',c,dark,.8);
      }
      if(['flowerearrings','diamondearrings'].includes(item.shape))for(const x of[79,161])s+=circle(x,103,3,'#dfbf70')+(item.shape==='flowerearrings'?flower(x,117,8,c):path(`M${x} 108l6 9-6 11-6-11Z`,c,dark,1));
      if(['bracelet','pearlbracelet'].includes(item.shape)){s+=path('M180 239q10 5 16-1','none','#d8b567',4);for(let i=0;i<6;i++)s+=circle(181+i*2.5,240+Math.sin(i/5*Math.PI)*2,2.3,item.shape==='pearlbracelet'?'#fff6e3':c);s+=star(183,248,4,c);}
      if(['witchhat','wizardhat','sunhat'].includes(item.shape)){
        s+=ellipse(120,58,63,15,fill,`stroke="${dark}"`);
        s+=path(item.shape==='sunhat'?'M88 54L91 24Q120 16 149 24L153 55Z':'M87 53L120-16L154 53Z',fill,dark,1);
        s+=path('M91 48Q120 57 149 48','none','#e7c17d',6);
        if(item.shape==='wizardhat')s+=star(122,13,6)+star(109,36,5);else s+=bow(143,50,.35,light);
      }
      if(item.shape==='batwings')s+=path('M112 178Q81 109 23 136L38 183Q67 157 66 208Q97 185 100 231L115 206 M128 178Q159 109 217 136L202 183Q173 157 174 208Q143 185 140 231L125 206',fill,dark,2);
      if(item.shape==='hairbow')s+=bow(143,48,.9,c);
      if(item.shape==='crown') {s+=path('M79 62Q120 31 162 62','none','#79936c',5);for(const[x,y,r]of[[85,55,10],[104,46,11],[124,44,10],[145,48,11],[159,58,8]])s+=flower(x,y,r,c);}
      if(item.shape==='beret') {s+=path('M76 61Q55 45 82 31Q127 11 164 34Q186 55 156 61Q118 47 76 61Z',fill,dark,1);s+=path('M119 26L116 17','none',dark,5);s+=path('M81 60Q120 48 157 60','none',dark,5);}
      if(item.shape==='tiara') {s+=path('M86 52L82 27L103 40L120 14L137 40L158 27L154 52Q120 40 86 52Z',fill,dark,1);for(const[x,y]of[[85,29],[120,18],[155,29]])s+=circle(x,y,3,'#fff7d0');s+=path('M119 29l5 7-5 7-5-7Z','#fff6dc');}
      if(item.shape==='bag') {s+=path('M178 243Q169 214 189 216Q207 218 199 244','none',dark,4);s+=path('M166 237L208 242L207 276Q187 290 165 275Z',fill,dark,1.5);s+=flower(187,260,10,'#f5e7c3');}
      if(item.shape==='heartbag') {s+=path('M177 243Q174 217 190 220Q205 225 200 245','none',dark,3);s+=path('M188 279Q156 258 167 245Q179 233 188 248Q200 234 209 247Q219 263 188 279Z',fill,dark,1.5);s+=star(193,253,4);}
      if(item.shape==='pearls') { for(let i=0;i<11;i++){const angle=Math.PI*i/10;s+=circle(120+23*Math.cos(angle),148+17*Math.sin(angle),3.2,mix(c,.3));}s+=path('M120 166l4 5-4 5-4-5Z',c,dark,.5);}
      if(item.shape==='wings') {
        s+=`<g opacity=".82">${path('M113 178Q74 104 30 134Q9 160 38 194Q5 212 41 240Q79 253 113 191 M127 178Q166 104 210 134Q231 160 202 194Q235 212 199 240Q161 253 127 191',fill,dark,1.4)}${path('M106 181Q58 143 34 140 M105 187L41 191 M103 197L42 232 M134 181Q182 143 206 140 M135 187L199 191 M137 197L198 232','none',light,2)}${star(40,157,7)}${star(200,157,7)}</g>`;
      }
      if(item.shape==='catears')s+=path('M78 65Q120 28 164 65','none',c,7)+path('M78 57L77 16L107 43 M135 43L164 16L166 59',fill,dark,2)+path('M86 47L86 30L100 44 M143 44L157 30L158 47','#e4a8bb');
      if(item.shape==='headphones')s+=path('M77 85V62C77 4 164 4 164 62v23','none',c,9)+ellipse(77,84,12,22,c)+ellipse(164,84,12,22,c)+ellipse(74,84,5,15,light)+ellipse(167,84,5,15,light);
      if(item.shape==='cape')s+=path('M101 142Q120 153 139 142L192 293Q120 329 48 293Z',fill,dark,2)+star(120,226,23,'#f5d581');
    }
    return s;
  }
  function facePaint(style,color) {
    let s='';
    if(['rosy','sunset','stardust','diamond'].includes(style)) {
      s+=ellipse(96,106,10,5,color,'opacity=".65"')+ellipse(144,106,10,5,color,'opacity=".65"');
      s+=path('M113 118Q120 123 127 117','none',color,3);
      if(style!=='rosy')s+=path('M96 81Q105 75 113 81 M129 81Q138 75 145 81','none',color,4);
    }
    if(style==='stardust')s+=star(95,105,6,'#e6bb65')+star(145,105,6,'#e6bb65');
    if(style==='diamond')for(const x of[93,146])s+=star(x,105,6,'#fff8e9')+circle(x+4,110,2,color);
    if(style==='ghost')for(const x of[94,145])s+=path(`M${x-7} 113v-8a7 7 0 0 1 14 0v8l-4-2-3 2-3-2Z`,'#fff7e7')+circle(x-2,105,1,'#544451')+circle(x+2,105,1,'#544451');
    if(style==='freckles')for(const side of[0,47])for(const[x,y]of[[90,103],[98,102],[105,105],[96,110]])s+=circle(x+side,y,1.3,'#a36c4d');
    if(style==='rainbow')for(const side of[0,45])['#db91a5','#edcc82',color].forEach((t,i)=>s+=path(`M${88+side+i*2} 108Q${98+side} ${89+i*5} ${108+side-i*2} 108`,'none',t,2));
    if(style==='butterfly')for(const side of[0,58])s+=ellipse(88+side,85,7,10,color)+ellipse(91+side,98,5,6,mix(color,.35));
    if(style==='kitty') {s+=path('M115 103Q120 97 125 103L120 109Z',color);for(const side of[-1,1])for(const y of[101,107,113])s+=path(`M${120+side*15} 107L${120+side*29} ${y}`,'none','#795d66',1.3);}
    return s;
  }
  function hairBack(shape,c,prefix) {
    const fill=`url(#${prefix})`, dark=mix(c,-.23);
    let s=material(c,prefix);
    if(shape==='straight')return s+path('M72 83Q68 25 120 25Q173 25 168 87L177 219Q148 230 142 218L142 131H98L98 220Q69 230 62 218Z',fill,dark,1)+path('M79 88l-5 126 M160 88l5 126','none',mix(c,.25),2);
    if(shape==='pixie')return s+ellipse(120,76,47,51,fill);
    if(shape==='topknot')return s+ellipse(120,25,27,24,fill)+ellipse(120,81,47,59,fill)+bow(144,35,.35,'#dbabc1');
    if(shape==='twintails')return s+path('M82 53Q36 44 45 126L49 197Q74 214 81 195L66 106L85 69 M158 53Q204 44 195 126L191 197Q166 214 159 195L174 106L155 69',fill,dark,1)+ellipse(120,83,47,58,fill)+bow(74,66,.35,'#e3b3c8')+bow(166,66,.35,'#e3b3c8');
    if(shape==='puffs'){for(const side of[-1,1]){s+=circle(120+side*52,45,26,c);for(let i=0;i<9;i++)s+=circle(120+side*52+Math.sin(i)*23,45+Math.cos(i)*23,9,c);}return s+ellipse(120,83,47,58,fill);}
    if(shape==='sidebraid'){s+=ellipse(120,83,47,58,fill);for(let y=108;y<219;y+=14)s+=ellipse(166-(y-108)*.24,y,13,10,fill);return s+bow(139,223,.35,'#dcabc2');}
    if(shape==='curls') {
      s+=ellipse(120,97,63,74,fill);
      for(const[x,y,r]of[[78,48,22],[101,33,21],[129,30,23],[155,44,25],[175,69,22],[179,98,20],[169,126,25],[154,149,21],[80,146,24],[64,115,23],[63,79,20]])s+=circle(x,y,r,c);
      return s;
    }
    if(shape==='buns') {s+=ellipse(77,39,24,25,fill);s+=ellipse(163,39,24,25,fill);s+=ellipse(120,85,47,60,fill);return s;}
    if(shape==='pony') {s+=path('M143 54Q160 7 185 37Q205 82 177 127Q164 153 189 175Q152 180 157 144Q166 81 142 72Z',fill,dark,1);s+=ellipse(120,83,47,58,fill);return s;}
    if(shape==='bob')return s+path('M73 79Q70 23 120 27Q170 23 169 80L176 139Q156 154 140 143L100 143Q81 155 64 138Z',fill,dark,1);
    if(shape==='braids') {
      s+=ellipse(120,86,47,60,fill);
      for(let y=122;y<204;y+=15){s+=ellipse(79+(y-122)*.02,y,12,11,fill);s+=ellipse(161-(y-122)*.02,y,12,11,fill);}
      s+=bow(81,208,.32,'#dca1b7')+bow(159,208,.32,'#dca1b7');return s;
    }
    return s+path('M72 83Q68 24 120 25Q173 23 170 88Q169 128 181 163Q193 192 165 199Q136 207 145 163L98 160Q104 204 76 199Q48 194 61 164Q76 132 72 83Z',fill,dark,1)+path('M82 96Q88 141 74 178Q70 186 79 191 M158 91Q149 140 168 175Q175 187 164 192','none',mix(c,.2),2,'opacity=".6"');
  }
  function hairFront(shape,c) {
    const light=mix(c,.2);
    let s=path('M78 84Q72 41 106 34Q148 17 164 57L163 90Q151 78 145 52Q123 77 82 74L81 98Z',c,mix(c,-.14),1);
    if(shape==='bob')s=path('M78 92Q67 40 110 32Q155 22 166 65L161 103Q150 84 143 56Q122 77 85 72L83 99Z',c,mix(c,-.14),1);
    if(shape==='pixie')s=path('M76 78Q66 37 111 29Q157 24 165 64L158 85L149 61Q124 93 81 76L80 103Z',c,mix(c,-.14),1);
    if(shape==='curls') {s='';for(const[x,y,r]of[[82,65,16],[95,48,18],[118,41,18],[140,46,20],[158,59,17],[162,80,11]])s+=circle(x,y,r,c);s+=path('M88 43Q98 32 112 39 M135 33Q151 33 157 49','none',light,2);}
    else s+=path('M86 62Q107 36 135 39 M92 65Q118 50 138 43 M151 46Q160 64 159 78','none',light,1.6,'opacity=".6"');
    return s;
  }
  function drawnMakeup(strokes,prefix){
    let art='',index=0;
    for(const stroke of (Array.isArray(strokes)?strokes:[]).slice(0,48)){
      if(!['brush','blush','eraser'].includes(stroke.tool)||!Array.isArray(stroke.points))continue;
      const color=/^#[a-f0-9]{6}$/i.test(stroke.color)?stroke.color:'#db91a5',size=Number.isFinite(stroke.size)?Math.max(.012,Math.min(.13,stroke.size))*78:3.5;
      let marks='';
      for(const mirror of stroke.mirror?[false,true]:[false]){
        let segment=[];
        const flush=()=>{if(!segment.length)return;const tint=stroke.tool==='eraser'?'black':color;marks+=segment.length===1?circle(...segment[0],size/2,tint):path(segment.map(([x,y],i)=>`${i?'L':'M'}${x} ${y}`).join(' '),'none',tint,size);segment=[];};
        for(const point of stroke.points.slice(0,128)){
          if(!Array.isArray(point)||!point.every(Number.isFinite)){flush();continue;}
          const x=Math.max(0,Math.min(1,point[0])),y=Math.max(0,Math.min(1,point[1]));segment.push([81+(mirror?1-x:x)*78,43+y*92]);
        }
        flush();
      }
      if(stroke.tool==='eraser'){const id=`${prefix}-erase-${index++}`;art=`<defs><mask id="${id}" maskUnits="userSpaceOnUse" x="75" y="35" width="95" height="110"><rect x="75" y="35" width="95" height="110" fill="white"/>${marks}</mask></defs><g mask="url(#${id})">${art}</g>`;}
      else art+=`<g opacity="${stroke.tool==='blush'?.28:1}">${marks}</g>`;
    }
    const clip=`${prefix}-paint-clip`;
    return `<defs><clipPath id="${clip}"><ellipse cx="120" cy="89" rx="39" ry="46"/></clipPath></defs><g clip-path="url(#${clip})">${art}</g>`;
  }
  function avatar(outfit, items, options={}) {
    const prefix=`doll${++sequence}`,skin=outfit.skin, hairItem=items[outfit.hair], hair=hairItem?.shape||'waves', c=outfit.hairColor;
    const shape=(p,key)=>p&&items[p.id]?garment(items[p.id],p.color,`${prefix}-${key}`):'';
    let s=material(skin,`${prefix}-skin`);
    const sf=`url(#${prefix}-skin)`, edge=mix(skin,-.2),headScale={round:'1.11 .90',heart:'1.04 1',square:'1.02 .96'}[outfit.headShape]||'1 1',headStart=`<g transform="translate(120 89) scale(${headScale}) translate(-120 -89)">`;
    s+=shape(outfit.extras.back,'back');
    s+=headStart+hairBack(hair,c,`${prefix}-hair`)+'</g>';
    s+=path('M87 237Q104 233 120 246Q135 233 153 241L148 312Q149 349 155 407L137 416Q121 365 122 324L119 278Q116 311 112 326Q107 370 104 417L84 410Q83 375 90 322L85 269Z',sf,edge,1.2);
    s+=path('M79 152Q68 155 61 187L45 238Q39 251 45 259Q50 266 55 258L62 243L78 211L91 176 M161 152Q174 157 180 189L197 237Q203 250 197 259Q191 266 185 258L179 240L164 210L149 176',sf,edge,1.2);
    s+=path('M105 122L105 143Q93 145 80 152Q85 173 94 183L94 211Q85 231 87 252Q120 270 153 252Q156 234 146 211L146 183Q155 173 160 152L135 143L135 122Z',sf,edge,1.2);
    s+=path('M106 129Q120 142 134 129L134 140Q120 150 106 140Z',mix(skin,-.09));
    s+=path('M99 158Q120 172 141 158L145 214Q120 223 95 214Z','#f5ede4');
    s+=path('M90 235L151 235L148 269L123 270L120 252L117 270L89 268Z','#f5ede4');
    s+=shape(outfit.shoes,'shoes');
    s+=shape(outfit.bottom,'bottom');
    s+=shape(outfit.top,'top');
    s+=shape(outfit.dress,'dress');
    s+=headStart+ellipse(82,90,8,12,skin)+ellipse(158,90,8,12,skin);
    s+=outfit.headShape==='heart'?path('M81 86C78 27 163 27 159 86Q158 114 120 135Q82 114 81 86Z',sf,edge,1):outfit.headShape==='square'?path('M81 84Q81 43 120 43Q159 43 159 84L156 113Q153 135 120 135Q87 135 84 113Z',sf,edge,1):ellipse(120,89,39,46,sf,`stroke="${edge}" stroke-width="1"`);
    s+=ellipse(96,104,10,5,'#dc8b8c','opacity=".3"')+ellipse(144,104,10,5,'#dc8b8c','opacity=".3"');
    s+=drawnMakeup(outfit.facePaint,prefix);
    for(const x of [104,137]) {
      s+=ellipse(x,90,8.8,9.4,'#fffaf3');s+=ellipse(x+1,90,5.4,7,'#574038');s+=ellipse(x+1,91,3.2,5.4,'#30282a');s+=circle(x+3,87,2.2,'#fff');
      s+=path(`M${x-8} 88Q${x} 80 ${x+8} 87 M${x-8} 86l-3-3`,'none','#49312e',1.8);
      s+=path(`M${x-7} 76Q${x} 73 ${x+6} 76`,'none',c,2);
    }
    s+=path('M120 95L117 104Q120 107 123 104','none',mix(skin,-.26),1.1);
    s+=path('M111 116Q120 123 129 115Q120 131 111 116Z','#aa5863');
    s+=path('M114 117Q120 120 126 117','none','#fff4df',1.7);
    s+=facePaint(items[outfit.makeup]?.shape||'none',outfit.makeupColor||'#db91a5');
    s+=hairFront(hair,c)+'</g>';
    s+=shape(outfit.extras.neck,'neck');
    s+=headStart+shape(outfit.extras.head,'head')+'</g>';
    s+=shape(outfit.extras.bag,'bag');
    s+=headStart+shape(outfit.extras.ears,'ears')+'</g>';s+=shape(outfit.extras.wrist,'wrist');s+=shape(outfit.extras.pet,'pet');
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 450" fill="none" role="img" aria-label="${esc(options.label||'Your styled character')}" class="doll-svg"><title>${esc(options.label||'Your styled character')}</title>${s}</svg>`;
  }
  function thumbnail(item, color) {
    const prefix=`piece${++sequence}`;
    const views={dresses:'32 131 176 281',tops:'43 134 154 103',bottoms:'56 206 128 210',shoes:'53 350 137 91',extras:'35 5 170 100',hair:'47 12 147 205',makeup:'70 39 100 110'};
    let view=views[item.category],s='';
    if(item.category==='hair')s=hairBack(item.shape,color||item.color,prefix)+ellipse(120,89,35,44,'#e7c3aa')+hairFront(item.shape,color||item.color);
    else if(item.category==='makeup') {
      s=ellipse(120,89,39,46,'#e8b99a');
      for(const x of[104,137])s+=ellipse(x,89,8,10,'#fffaf5')+ellipse(x,90,4,7,'#574038')+circle(x+2,87,1.7,'#fff')+path(`M${x-8} 79Q${x} 75 ${x+7} 79`,'none','#754e3a',2);
      s+=path('M113 117Q120 124 128 116','none','#a55969',2)+facePaint(item.shape,color||item.color);
    }else s=garment(item,color,prefix);
    if(item.category==='dresses'&&!['gown','cosmic','velvet','pearl','aurora','witch','vampire'].includes(item.shape))view='42 135 155 193';
    if(item.category==='bottoms'&&!['jeans','trousers','cargo','flare','palazzo','skeleton'].includes(item.shape))view='53 204 137 110';
    if(item.slot==='bag')view='147 204 82 91';
    if(item.slot==='neck')view='88 131 65 62';
    if(item.slot==='ears')view='59 88 122 48';
    if(item.slot==='wrist')view='173 225 29 32';
    if(item.slot==='pet')view='42 126 75 135';
    if(['witchhat','wizardhat','sunhat'].includes(item.shape))view='44 -22 154 104';
    if(item.slot==='back')view='4 106 232 155';
    if(['cape','starcape'].includes(item.shape))view='32 128 177 193';
    if(item.shape==='headphones')view='50 5 142 107';
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${view}" fill="none" aria-hidden="true">${s}</svg>`;
  }
  const icons={
    makeup:'<circle cx="12" cy="12" r="9"/><path d="M6 10q2-3 4 0m4 0q2-3 4 0M8 16q4 3 8 0M6 13h1m10 0h1"/>',
    arrow:'<path d="M4 12h15m-6-6 6 6-6 6"/>', chevron:'<path d="m8 10 4 4 4-4"/>', plus:'<path d="M12 5v14M5 12h14"/>',
    heart:'<path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" transform="translate(1 0) scale(.9)"/>',
    clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/>',
    shuffle:'<path d="M3 6h3c5 0 6 12 11 12h4m-4-4 4 4-4 4M3 18h3c2 0 3-2 4-4m4-4c1-2 2-4 4-4h3m-4-4 4 4-4 4"/>',
    undo:'<path d="m8 4-5 5 5 5M3 9h10a6 6 0 0 1 0 12h-3"/>',
    refresh:'<path d="M20 8a8 8 0 1 0 0 8M20 3v5h-5"/>',
    sparkles:'<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z M20 2v4M18 4h4"/>',
    dress:'<path d="m9 3 3 2 3-2 2 5-3 3 6 10H4l6-10-3-3 2-5Z"/>',
    shirt:'<path d="m8 4-6 4 3 5 3-2v10h8V11l3 2 3-5-6-4c-2 3-6 3-8 0Z"/>',
    skirt:'<path d="M8 4h8l5 17H3L8 4ZM7 8h10M10 8 8 21M14 8l2 13"/>',
    shoe:'<path d="M3 10c4 1 5-2 6-4l5 7 6 2c2 1 2 5 0 5H3V10ZM3 17h18M11 11l3-2M14 14l3-2"/>',
    bow:'<path d="M10 10C5 2 1 5 3 13c2 3 5 0 7-1m4-2c5-8 9-5 7 3-2 3-5 0-7-1M10 13 7 21l5-3 5 3-3-8"/><rect x="10" y="8" width="4" height="6" rx="2"/>',
    hair:'<path d="M6 20c-3-2-3-5-2-9C4 1 20 1 20 11c1 4 1 7-2 9M7 9c5 0 6-4 6-4 0 3 4 5 4 5v4c0 8-10 8-10 0V9Z"/>',
    help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 4 2c-1 .5-1.5 1-1.5 2.5M12 17h.01"/>',
    muted:'<path d="m11 4-5 4H3v8h3l5 4V4ZM16 9l6 6m0-6-6 6"/>',
    sound:'<path d="m11 4-5 4H3v8h3l5 4V4ZM15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',
    check:'<path d="m5 12 4 4L19 6"/>',
    download:'<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
    trash:'<path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7m4-7v7"/>',
    book:'<path d="M12 5C8 2 4 3 2 4v16c3-1 6-1 10 1 4-2 7-2 10-1V4c-2-1-6-2-10 1Zm0 0v16"/>'
  };
  function icon(name) {return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]||icons.sparkles}</svg>`;}
  function portrait(outfit,items,name,theme) {
    const doll=avatar(outfit,items).replace(/<svg[^>]*>/,'<svg x="130" y="112" width="340" height="638" viewBox="0 0 240 450">');
    return `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="850" viewBox="0 0 600 850"><rect width="600" height="850" rx="24" fill="#faf7f2"/><rect x="25" y="25" width="550" height="738" rx="230" fill="${theme.bg}"/><text x="300" y="74" text-anchor="middle" font-family="Georgia,serif" font-size="25" fill="#664653">style club.</text><text x="300" y="105" text-anchor="middle" font-family="sans-serif" font-size="12" letter-spacing="3" fill="#775a65">${esc(theme.name.toUpperCase())}</text><ellipse cx="300" cy="733" rx="155" ry="15" fill="#d6bcc7"/>${doll}<text x="300" y="804" text-anchor="middle" font-family="Georgia,serif" font-size="${name.length>27?20:28}" fill="#60414c">${esc(name)}</text><text x="300" y="832" text-anchor="middle" font-family="sans-serif" font-size="10" letter-spacing="2" fill="#88777b">MADE OF DAYDREAMS &amp; A LITTLE SPARKLE</text></svg>`;
  }
  return { avatar,thumbnail,icon,portrait,esc,mix };
});
