(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.StyleGame = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const COLORS = [
    { hex: '#db91a5', name: 'Rosewater' }, { hex: '#bda5d8', name: 'Lilac dream' },
    { hex: '#8eafd1', name: 'Blue sky' }, { hex: '#a4bba1', name: 'Sage garden' },
    { hex: '#edcc82', name: 'Buttercup' }, { hex: '#f0ad88', name: 'Peach fizz' },
    { hex: '#f2e9d8', name: 'Vanilla cloud' }, { hex: '#a95665', name: 'Berry kiss' },
    { hex: '#756689', name: 'Twilight' }, { hex: '#514859', name: 'Midnight' },
    { hex: '#83bfb7', name: 'Sea glass' }, { hex: '#e4c2ad', name: 'Ballet slipper' },
    { hex: '#ed9854', name: 'Pumpkin glow' }, { hex: '#32313f', name: 'Inky velvet' }
  ];
  const HAIR_COLORS = [
    { hex: '#493027', name: 'Chestnut' }, { hex: '#241e24', name: 'Soft black' },
    { hex: '#8d5136', name: 'Cinnamon' }, { hex: '#bd814a', name: 'Caramel' },
    { hex: '#e0ba76', name: 'Honey blonde' }, { hex: '#eee0ba', name: 'Platinum' },
    { hex: '#d394a7', name: 'Candy pink' }, { hex: '#a58ebd', name: 'Lavender' },
    { hex:'#54a99f',name:'Mermaid teal' }, { hex:'#536eb6',name:'Blueberry' },
    { hex:'#b74058',name:'Cherry red' }, { hex:'#f0ac83',name:'Peach sorbet' },
    { hex:'#c2cbd6',name:'Moon silver' }, { hex:'#764998',name:'Grape soda' },
    { hex:'#ef86bd',name:'Bubblegum' }, { hex:'#ce519e',name:'Dragon fruit' },
    { hex:'#9baa71',name:'Pistachio' }, { hex:'#f1d28d',name:'Golden vanilla' }
  ];
  const SKIN_TONES = [
    { hex: '#f4d7c5', name: 'Porcelain' }, { hex: '#e8b99a', name: 'Peach' },
    { hex: '#d39c79', name: 'Golden' }, { hex: '#b87e59', name: 'Caramel' },
    { hex: '#925c43', name: 'Warm brown' }, { hex: '#65402f', name: 'Deep brown' }
  ];
  const CATEGORIES = [
    { id: 'dresses', label: 'Dresses', icon: 'dress' }, { id: 'tops', label: 'Tops', icon: 'shirt' },
    { id: 'bottoms', label: 'Bottoms', icon: 'skirt' }, { id: 'shoes', label: 'Shoes', icon: 'shoe' },
    { id: 'extras', label: 'Extras', icon: 'bow' }, { id: 'hair', label: 'Hair & you', icon: 'hair' },
    { id: 'makeup', label: 'Makeup', icon: 'makeup' }
  ];
  const POSES = [
    { name: 'Just me', icon: '✧' }, { name: 'Hand on hip', icon: '♡' },
    { name: 'Hello!', icon: '✋' }, { name: 'Superstar', icon: '★' },
    { name: 'Heart hug', icon: '♥' }, { name: 'Happy twirl', icon: '↻' },
    { name: 'Little curtsy', icon: '✿' }, { name: 'Superhero', icon: '⚡' },
    { name: 'Runway classic', icon: '✦' }, { name: 'Cover star', icon: '◇' },
    { name: 'Over the shoulder', icon: '↶' }, { name: 'Cross step', icon: '×' },
    { name: 'Frame the face', icon: '♡' }, { name: 'Power pose', icon: '★' },
    { name: 'Point & pose', icon: '❋' }, { name: 'Grand finale', icon: '✧' }
  ];
  const ITEMS = [
    { id: 'petal', category: 'dresses', name: 'Petal party', detail: 'A little flower power', shape: 'petal', color: '#db91a5', tags: ['floral', 'pastel', 'fancy'] },
    { id: 'cloud', category: 'dresses', name: 'Cloud nine', detail: 'Float into the room', shape: 'cloud', color: '#8eafd1', tags: ['pastel', 'dreamy', 'fancy'] },
    { id: 'bow-dress', category: 'dresses', name: 'Bow belle', detail: 'Tied up in a bow', shape: 'bow', color: '#bda5d8', tags: ['pastel', 'cute', 'fancy'] },
    { id: 'meadow', category: 'dresses', name: 'Meadow muse', detail: 'Fresh as a daisy', shape: 'meadow', color: '#a4bba1', tags: ['floral', 'nature', 'casual'] },
    { id: 'starlight', category: 'dresses', name: 'After starlight', detail: 'A sky full of sparkle', shape: 'star', color: '#756689', tags: ['sparkle', 'dreamy', 'fancy'] },
    { id: 'sunbeam', category: 'dresses', name: 'Sunbeam', detail: 'A pocket of sunshine', shape: 'sun', color: '#edcc82', tags: ['bright', 'summer', 'casual'] },
    { id: 'ballgown', category: 'dresses', name: 'Storybook', detail: 'Once upon an outfit', shape: 'gown', color: '#bda5d8', tags: ['dreamy', 'fancy', 'sparkle'] },
    { id: 'sailor', category: 'dresses', name: 'Seaside stroll', detail: 'Meet you by the sea', shape: 'sailor', color: '#8eafd1', tags: ['summer', 'casual', 'adventure'] },
    { id: 'tee', category: 'tops', name: 'Everyday sunshine', detail: 'Your happy little tee', shape: 'tee', color: '#f2e9d8', tags: ['casual', 'bright', 'sporty'] },
    { id: 'blouse', category: 'tops', name: 'Sweet collar', detail: 'Perfectly pretty', shape: 'blouse', color: '#e4c2ad', tags: ['cute', 'fancy', 'pastel'] },
    { id: 'sweater', category: 'tops', name: 'Cozy cloud', detail: 'A wearable hug', shape: 'sweater', color: '#bda5d8', tags: ['cozy', 'pastel', 'casual'] },
    { id: 'hoodie', category: 'tops', name: 'Daydream hoodie', detail: 'Ready for anything', shape: 'hoodie', color: '#a4bba1', tags: ['cozy', 'sporty', 'adventure'] },
    { id: 'vest', category: 'tops', name: 'Book club', detail: 'One more chapter', shape: 'vest', color: '#a95665', tags: ['cozy', 'cute', 'adventure'] },
    { id: 'sparkle-top', category: 'tops', name: 'Disco darling', detail: 'Bring your own sparkle', shape: 'sparkle', color: '#edcc82', tags: ['sparkle', 'bright', 'fancy'] },
    { id: 'pleated', category: 'bottoms', name: 'Twirl time', detail: 'Made for spinning', shape: 'pleated', color: '#db91a5', tags: ['cute', 'fancy', 'pastel'] },
    { id: 'jeans', category: 'bottoms', name: 'Blue jean dream', detail: 'An everyday favorite', shape: 'jeans', color: '#8eafd1', tags: ['casual', 'adventure', 'cozy'] },
    { id: 'shorts', category: 'bottoms', name: 'Sunny days', detail: 'Hello, adventure', shape: 'shorts', color: '#edcc82', tags: ['summer', 'sporty', 'adventure'] },
    { id: 'tutu', category: 'bottoms', name: 'Tiny dancer', detail: 'Layers of lovely', shape: 'tutu', color: '#bda5d8', tags: ['dreamy', 'pastel', 'fancy'] },
    { id: 'trousers', category: 'bottoms', name: 'Sunday stroll', detail: 'Easy, breezy, you', shape: 'trousers', color: '#a4bba1', tags: ['nature', 'cozy', 'casual'] },
    { id: 'flower-skirt', category: 'bottoms', name: 'Daisy chain', detail: 'A garden to go', shape: 'flower', color: '#f0ad88', tags: ['floral', 'summer', 'nature'] },
    { id: 'maryjanes', category: 'shoes', name: 'Ballet days', detail: 'A lovely little step', shape: 'maryjane', color: '#e4c2ad', tags: ['fancy', 'cute', 'pastel'] },
    {id:'bow-heels',category:'shoes',name:'Bow step heels',detail:'Chunky heels with a pretty bow',shape:'blockheel',color:'#db91a5',tags:['fancy','cute','pastel'],fresh:true},
    {id:'party-heels',category:'shoes',name:'Starlight heels',detail:'Sparkly heels for the runway',shape:'sparkleheel',color:'#bda5d8',tags:['sparkle','fancy','dreamy'],fresh:true},
    { id: 'sneakers', category: 'shoes', name: 'Happy steps', detail: 'Let’s go places', shape: 'sneaker', color: '#f2e9d8', tags: ['casual', 'sporty', 'adventure'] },
    { id: 'boots', category: 'shoes', name: 'Rain or shine', detail: 'Puddle-jump approved', shape: 'boot', color: '#a4bba1', tags: ['nature', 'adventure', 'cozy'] },
    { id: 'sandals', category: 'shoes', name: 'Golden hour', detail: 'Toes in the sunshine', shape: 'sandal', color: '#edcc82', tags: ['summer', 'floral', 'casual'] },
    { id: 'star-boots', category: 'shoes', name: 'Moonwalkers', detail: 'Out of this world', shape: 'starboot', color: '#bda5d8', tags: ['sparkle', 'dreamy', 'bright'] },
    { id: 'slippers', category: 'shoes', name: 'Cloud slippers', detail: 'The cozy life', shape: 'slipper', color: '#db91a5', tags: ['cozy', 'cute', 'pastel'] },
    { id: 'hair-bow', category: 'extras', slot: 'head', name: 'The big bow', detail: 'The finishing touch', shape: 'hairbow', color: '#db91a5', tags: ['cute', 'pastel', 'fancy'] },
    { id: 'flower-crown', category: 'extras', slot: 'head', name: 'Flower child', detail: 'A crown from the garden', shape: 'crown', color: '#f0ad88', tags: ['floral', 'nature', 'dreamy'] },
    { id: 'beret', category: 'extras', slot: 'head', name: 'Bonjour beret', detail: 'A little artsy', shape: 'beret', color: '#a95665', tags: ['cozy', 'cute', 'adventure'] },
    { id: 'tiara', category: 'extras', slot: 'head', name: 'Wish upon a star', detail: 'Your royal moment', shape: 'tiara', color: '#edcc82', tags: ['sparkle', 'fancy', 'dreamy'] },
    { id: 'bag', category: 'extras', slot: 'bag', name: 'Pocket of petals', detail: 'Carry a little joy', shape: 'bag', color: '#f2e9d8', tags: ['floral', 'cute', 'summer'] },
    { id: 'heart-bag', category: 'extras', slot: 'bag', name: 'Love letter', detail: 'Wear your heart out', shape: 'heartbag', color: '#db91a5', tags: ['cute', 'bright', 'fancy'] },
    { id: 'pearls', category: 'extras', slot: 'neck', name: 'Little treasures', detail: 'A string of lovely', shape: 'pearls', color: '#f2e9d8', tags: ['fancy', 'pastel', 'dreamy'] },
    { id: 'wings', category: 'extras', slot: 'back', name: 'Fairy wishes', detail: 'Let your dreams take flight', shape: 'wings', color: '#bda5d8', tags: ['dreamy', 'nature', 'sparkle'] },
    { id: 'rainbow-dress', category: 'dresses', name: 'Rainbow parade', detail: 'Every color, all together', shape: 'rainbow', color: '#db91a5', tags: ['bright', 'dreamy', 'summer'], fresh: true },
    { id: 'cosmic-gown', category: 'dresses', name: 'Galaxy queen', detail: 'A whole galaxy of stars', shape: 'cosmic', color: '#756689', tags: ['sparkle', 'dreamy', 'fancy'], fresh: true },
    { id: 'butterfly-dress', category: 'dresses', name: 'Butterfly picnic', detail: 'Little wings, big dreams', shape: 'butterfly', color: '#83bfb7', tags: ['nature', 'floral', 'dreamy'], fresh: true },
    { id: 'cupcake-dress', category: 'dresses', name: 'Cupcake confetti', detail: 'Ruffles on ruffles', shape: 'cupcake', color: '#f0ad88', tags: ['cute', 'pastel', 'fancy'], fresh: true },
    { id: 'bomber', category: 'tops', name: 'Rocket club', detail: 'Ready for takeoff', shape: 'bomber', color: '#83bfb7', tags: ['sporty', 'adventure', 'sparkle'], fresh: true },
    { id: 'denim-jacket', category: 'tops', name: 'Denim daydream', detail: 'Pockets for little treasures', shape: 'denim', color: '#8eafd1', tags: ['casual', 'adventure', 'cozy'], fresh: true },
    { id: 'stripe-tee', category: 'tops', name: 'Candy stripes', detail: 'A bright little classic', shape: 'stripes', color: '#db91a5', tags: ['bright', 'summer', 'casual'], fresh: true },
    { id: 'varsity', category: 'tops', name: 'Team sparkle', detail: 'Everyone belongs on this team', shape: 'varsity', color: '#a95665', tags: ['sporty', 'cute', 'cozy'], fresh: true },
    { id: 'cargo', category: 'bottoms', name: 'Treasure hunter', detail: 'So many useful pockets', shape: 'cargo', color: '#a4bba1', tags: ['adventure', 'nature', 'casual'], fresh: true },
    { id: 'flare', category: 'bottoms', name: 'Disco flares', detail: 'A little extra swish', shape: 'flare', color: '#bda5d8', tags: ['sparkle', 'fancy', 'bright'], fresh: true },
    { id: 'star-skirt', category: 'bottoms', name: 'Shooting stars', detail: 'Twinkle with every step', shape: 'star-skirt', color: '#756689', tags: ['sparkle', 'dreamy', 'fancy'], fresh: true },
    { id: 'lace-boots', category: 'shoes', name: 'Adventure laces', detail: 'Lace up, head out', shape: 'laceboot', color: '#a95665', tags: ['adventure', 'cozy', 'casual'], fresh: true },
    { id: 'high-tops', category: 'shoes', name: 'Playground pop', detail: 'High tops, happy feet', shape: 'hightop', color: '#83bfb7', tags: ['sporty', 'bright', 'casual'], fresh: true },
    { id: 'cat-ears', category: 'extras', slot: 'head', name: 'Kitten club', detail: 'A purr-fect little headband', shape: 'catears', color: '#e4c2ad', tags: ['cute', 'cozy', 'dreamy'], fresh: true },
    { id: 'headphones', category: 'extras', slot: 'head', name: 'My own beat', detail: 'Dance to your own tune', shape: 'headphones', color: '#bda5d8', tags: ['sporty', 'bright', 'casual'], fresh: true },
    { id: 'hero-cape', category: 'extras', slot: 'back', name: 'Everyday hero', detail: 'Kindness is a superpower', shape: 'cape', color: '#db91a5', tags: ['adventure', 'dreamy', 'bright'], fresh: true },
    { id:'velvet-gown',category:'dresses',name:'Velvet spotlight',detail:'A sweeping velvet gown',shape:'velvet',color:'#a95665',tags:['fancy','sparkle'],collection:'vip',fresh:true },
    { id:'pearl-gown',category:'dresses',name:'Pearl premiere',detail:'Pearls from collar to hem',shape:'pearl',color:'#f2e9d8',tags:['fancy','dreamy'],collection:'vip',fresh:true },
    { id:'aurora-gown',category:'dresses',name:'Northern lights',detail:'A rainbow made for the runway',shape:'aurora',color:'#83bfb7',tags:['fancy','dreamy','bright'],collection:'vip',fresh:true },
    { id:'diamond-dress',category:'dresses',name:'Diamond daydream',detail:'Little gems, big sparkle',shape:'diamond',color:'#8eafd1',tags:['sparkle','fancy'],collection:'vip',fresh:true },
    { id:'tweed-jacket',category:'tops',name:'First-row jacket',detail:'A smart jacket with gold buttons',shape:'tweed',color:'#db91a5',tags:['fancy','cute'],collection:'vip',fresh:true },
    { id:'tuxedo',category:'tops',name:'Opening night',detail:'A bow tie and satin lapels',shape:'tuxedo',color:'#32313f',tags:['fancy','sparkle'],collection:'vip',fresh:true },
    { id:'palazzo',category:'bottoms',name:'Cloud palazzo',detail:'Wide legs and a soft swish',shape:'palazzo',color:'#f2e9d8',tags:['fancy','dreamy'],collection:'vip',fresh:true },
    { id:'sequin-skirt',category:'bottoms',name:'Disco confetti',detail:'A skirt full of little gems',shape:'sequin',color:'#bda5d8',tags:['sparkle','bright'],collection:'vip',fresh:true },
    { id:'pearl-shoes',category:'shoes',name:'Pearl slippers',detail:'A pearl for every step',shape:'pearlshoe',color:'#f2e9d8',tags:['fancy','dreamy'],collection:'vip',fresh:true },
    { id:'diamond-boots',category:'shoes',name:'Spotlight boots',detail:'Sparkle all the way to the toes',shape:'diamondboot',color:'#8eafd1',tags:['fancy','sparkle'],collection:'vip',fresh:true },
    { id:'royal-crown',category:'extras',slot:'head',name:'Crown jewel',detail:'A grand golden crown',shape:'royalcrown',color:'#edcc82',tags:['fancy','sparkle'],collection:'vip',fresh:true },
    { id:'quilted-bag',category:'extras',slot:'bag',name:'Front-row bag',detail:'Soft quilting and a golden clasp',shape:'quiltedbag',color:'#db91a5',tags:['fancy','cute'],collection:'vip',fresh:true },
    { id:'starlight-cape',category:'extras',slot:'back',name:'Starlight cape',detail:'A trail of runway stars',shape:'starcape',color:'#756689',tags:['sparkle','dreamy'],collection:'vip',fresh:true },
    { id:'diamond-glow',category:'makeup',name:'Diamond glow',detail:'Pearl shimmer and tiny gems',shape:'diamond',color:'#8eafd1',tags:[],collection:'vip',fresh:true },
    { id:'witch-dress',category:'dresses',name:'Midnight magic',detail:'A friendly little witch costume',shape:'witch',color:'#756689',tags:['dreamy','adventure'],collection:'halloween',fresh:true },
    { id:'pumpkin-dress',category:'dresses',name:'Pumpkin patch',detail:'The happiest pumpkin in the mall',shape:'pumpkin',color:'#ed9854',tags:['bright','cute','nature'],collection:'halloween',fresh:true },
    { id:'ghost-dress',category:'dresses',name:'Boo-tiful',detail:'A smiling ghost, never scary',shape:'ghost',color:'#f2e9d8',tags:['cute','dreamy'],collection:'halloween',fresh:true },
    { id:'vampire-dress',category:'dresses',name:'Countess Cherry',detail:'Velvet and a storybook collar',shape:'vampire',color:'#a95665',tags:['fancy','dreamy'],collection:'halloween',fresh:true },
    { id:'skeleton-top',category:'tops',name:'Funny bones top',detail:'A friendly skeleton costume',shape:'skeleton',color:'#32313f',tags:['adventure','cute'],collection:'halloween',fresh:true },
    { id:'skeleton-bottom',category:'bottoms',name:'Funny bones trousers',detail:'Dancing bones on both legs',shape:'skeleton',color:'#32313f',tags:['adventure','cute'],collection:'halloween',fresh:true },
    { id:'witch-hat',category:'extras',slot:'head',name:'Spellbound hat',detail:'A tall hat with a golden buckle',shape:'witchhat',color:'#756689',tags:['dreamy','adventure'],collection:'halloween',fresh:true },
    { id:'wizard-hat',category:'extras',slot:'head',name:'Starry wizard',detail:'Stars on a pointy hat',shape:'wizardhat',color:'#8eafd1',tags:['dreamy','sparkle'],collection:'halloween',fresh:true },
    { id:'pumpkin-beret',category:'extras',slot:'head',name:'Pumpkin topper',detail:'A little leaf and a curly stem',shape:'pumpkinhat',color:'#ed9854',tags:['nature','cute'],collection:'halloween',fresh:true },
    { id:'bat-wings',category:'extras',slot:'back',name:'Little night wings',detail:'Take a friendly bat bow',shape:'batwings',color:'#514859',tags:['dreamy','adventure'],collection:'halloween',fresh:true },
    { id:'trick-treat-bag',category:'extras',slot:'bag',name:'Treat time',detail:'A smiling pumpkin pail',shape:'pumpkinbag',color:'#ed9854',tags:['cute','bright'],collection:'halloween',fresh:true },
    { id:'stripe-boots',category:'shoes',name:'Hocus-pocus boots',detail:'Stripes from top to toe',shape:'stripeboot',color:'#756689',tags:['dreamy','bright'],collection:'halloween',fresh:true },
    { id:'ghost-paint',category:'makeup',name:'Boo cheeks',detail:'Two tiny friendly ghosts',shape:'ghost',color:'#f2e9d8',tags:[],collection:'halloween',fresh:true },
    { id:'moon-paint',category:'makeup',name:'Moonlit magic',detail:'Stars for a magical costume',shape:'stardust',color:'#edcc82',tags:[],collection:'halloween',fresh:true },
    { id:'cherry-dress',category:'dresses',name:'Cherry on top',detail:'Little cherries all around',shape:'cherry',color:'#db91a5',tags:['cute','summer','floral'],fresh:true },
    { id:'plaid-dress',category:'dresses',name:'Picnic check',detail:'Checks and a bow at the waist',shape:'plaid',color:'#a4bba1',tags:['nature','casual','cute'],fresh:true },
    { id:'raincoat',category:'tops',name:'Sunshine raincoat',detail:'Golden buttons for rainy days',shape:'raincoat',color:'#edcc82',tags:['adventure','bright'],fresh:true },
    { id:'sport-tee',category:'tops',name:'Star player',detail:'Your own team of one',shape:'sport',color:'#83bfb7',tags:['sporty','bright'],fresh:true },
    { id:'ribbon-flats',category:'shoes',name:'Ribbon dance',detail:'Soft shoes with little ribbons',shape:'ribbonshoe',color:'#db91a5',tags:['fancy','cute'],fresh:true },
    { id:'sun-hat',category:'extras',slot:'head',name:'Sunday sunhat',detail:'A wide brim with a pretty bow',shape:'sunhat',color:'#edcc82',tags:['summer','nature'],fresh:true },
    {id:'heart-necklace',category:'extras',slot:'neck',name:'Heart of gold',detail:'A tiny heart on a golden chain',shape:'heartnecklace',color:'#edcc82',tags:['cute','fancy'],fresh:true},
    {id:'charm-bracelet',category:'extras',slot:'wrist',name:'Lucky little charms',detail:'Stars for your wrist',shape:'bracelet',color:'#edcc82',tags:['cute','sparkle'],fresh:true},
    {id:'flower-earrings',category:'extras',slot:'ears',name:'Daisy drops',detail:'Flowers beside your smile',shape:'flowerearrings',color:'#f0ad88',tags:['floral','cute'],fresh:true},
    {id:'diamond-earrings',category:'extras',slot:'ears',name:'Premiere drops',detail:'Little diamonds, lots of shimmer',shape:'diamondearrings',color:'#8eafd1',tags:['sparkle','fancy'],collection:'vip',fresh:true},
    {id:'gem-necklace',category:'extras',slot:'neck',name:'Velvet jewel',detail:'A gem for a grand entrance',shape:'gemnecklace',color:'#bda5d8',tags:['sparkle','fancy'],collection:'vip',fresh:true},
    {id:'pearl-bracelet',category:'extras',slot:'wrist',name:'Pearl wishes',detail:'A ring of tiny pearls',shape:'pearlbracelet',color:'#f2e9d8',tags:['fancy','dreamy'],collection:'vip',fresh:true},
    {id:'bow-kitten',category:'extras',slot:'pet',name:'Miss Mittens',detail:'A kitten with a pretty bow',shape:'petcat',color:'#e4c2ad',tags:['cute','cozy'],fresh:true},
    {id:'pocket-puppy',category:'extras',slot:'pet',name:'Button the puppy',detail:'A little pup in a bandana',shape:'petdog',color:'#edcc82',tags:['cute','adventure'],fresh:true},
    {id:'bunny-friend',category:'extras',slot:'pet',name:'Clover the bunny',detail:'Floppy ears and a ribbon',shape:'petrabbit',color:'#f2e9d8',tags:['cute','nature'],fresh:true},
    {id:'vip-poodle',category:'extras',slot:'pet',name:'Coco the poodle',detail:'A fluffy VIP with a golden bow',shape:'petpoodle',color:'#db91a5',tags:['fancy','cute'],collection:'vip',fresh:true},
    {id:'vip-kitten',category:'extras',slot:'pet',name:'Duchess the kitten',detail:'A tiny crown for a tiny friend',shape:'petroyalcat',color:'#bda5d8',tags:['fancy','dreamy'],collection:'vip',fresh:true},
    { id: 'fresh-face', category: 'makeup', name: 'Fresh face', detail: 'Take the face paint off', shape: 'none', color: '#db91a5', tags: [] },
    { id: 'rosy', category: 'makeup', name: 'Rosy glow', detail: 'Soft cheeks and a rosy smile', shape: 'rosy', color: '#db91a5', tags: [] },
    { id: 'sunset', category: 'makeup', name: 'Peach sunset', detail: 'A warm sweep of color', shape: 'sunset', color: '#f0ad88', tags: [] },
    { id: 'stardust', category: 'makeup', name: 'Stardust', detail: 'Twinkly stars for your cheeks', shape: 'stardust', color: '#bda5d8', tags: [] },
    { id: 'rainbow-paint', category: 'makeup', name: 'Rainbow cheeks', detail: 'A tiny rainbow on each side', shape: 'rainbow', color: '#8eafd1', tags: [] },
    { id: 'butterfly-paint', category: 'makeup', name: 'Butterfly magic', detail: 'Little wings around your eyes', shape: 'butterfly', color: '#bda5d8', tags: [] },
    { id: 'freckles', category: 'makeup', name: 'Sunny freckles', detail: 'A sprinkle of sunshine', shape: 'freckles', color: '#e4c2ad', tags: [] },
    { id: 'kitty-paint', category: 'makeup', name: 'Kitty whiskers', detail: 'A nose and playful whiskers', shape: 'kitty', color: '#db91a5', tags: [] },
    {id:'long-straight',category:'hair',name:'Silky waterfall',detail:'Long, smooth, and lovely',shape:'straight',color:'#493027',tags:[],fresh:true},
    {id:'twin-tails',category:'hair',name:'Double swish',detail:'Two playful ponytails',shape:'twintails',color:'#d394a7',tags:[],fresh:true},
    {id:'pixie',category:'hair',name:'Pixie sparkle',detail:'Short with a swoopy fringe',shape:'pixie',color:'#a58ebd',tags:[],fresh:true},
    {id:'top-knot',category:'hair',name:'The top knot',detail:'A high bun with a ribbon',shape:'topknot',color:'#241e24',tags:[],fresh:true},
    {id:'side-braid',category:'hair',name:'Storybook braid',detail:'One braid over the shoulder',shape:'sidebraid',color:'#e0ba76',tags:[],fresh:true},
    {id:'puff-buns',category:'hair',name:'Cloud puffs',detail:'Two beautiful textured puffs',shape:'puffs',color:'#241e24',tags:[],fresh:true},
    { id: 'waves', category: 'hair', name: 'Soft waves', detail: 'Go with the flow', shape: 'waves', color: '#493027', tags: [] },
    { id: 'bob', category: 'hair', name: 'The little bob', detail: 'Short & sweet', shape: 'bob', color: '#8d5136', tags: [] },
    { id: 'curls', category: 'hair', name: 'Cloud curls', detail: 'Big, beautiful curls', shape: 'curls', color: '#241e24', tags: [] },
    { id: 'ponytail', category: 'hair', name: 'Sky-high pony', detail: 'Up for anything', shape: 'pony', color: '#bd814a', tags: [] },
    { id: 'buns', category: 'hair', name: 'Space buns', detail: 'Double the daydream', shape: 'buns', color: '#a58ebd', tags: [] },
    { id: 'braids', category: 'hair', name: 'Ribbon braids', detail: 'Two of a kind', shape: 'braids', color: '#e0ba76', tags: [] }
  ];
  const THEMES = [
    { id: 'garden', name: 'Garden Party', icon: '✿', description: 'A little floral. A little fairy tale.', hint: 'Think flowers, soft colors, and an afternoon in the sunshine.', tags: ['floral', 'nature', 'pastel'], colors: ['#db91a5', '#a4bba1', '#f0ad88', '#e4c2ad'], bg: '#f0dfdf' },
    { id: 'fairy', name: 'Fairy Tale', icon: '✧', description: 'Once upon a wonderful wardrobe.', hint: 'Dreamy layers, a little sparkle, and a sprinkle of make-believe.', tags: ['dreamy', 'fancy', 'sparkle'], colors: ['#bda5d8', '#db91a5', '#edcc82'], bg: '#e6dff0' },
    { id: 'cozy', name: 'Cozy Sunday', icon: '☁', description: 'A warm hug, but make it fashion.', hint: 'Soft sweaters, comfy shoes, and your favorite daydreams.', tags: ['cozy', 'casual', 'cute'], colors: ['#e4c2ad', '#a95665', '#f2e9d8'], bg: '#efe2d6' },
    { id: 'starlight', name: 'Starlight Soirée', icon: '✦', description: 'The stars have a little competition.', hint: 'Shimmer, twinkle, and dress for a night under the stars.', tags: ['sparkle', 'dreamy', 'fancy'], colors: ['#756689', '#514859', '#bda5d8', '#edcc82'], bg: '#e0dfed' },
    { id: 'summer', name: 'Hello, Sunshine', icon: '☀', description: 'A little sunshine in every stitch.', hint: 'Sunny colors, easy outfits, and a day by the sea.', tags: ['summer', 'bright', 'casual'], colors: ['#edcc82', '#f0ad88', '#8eafd1', '#83bfb7'], bg: '#f2e9cf' },
    { id: 'adventure', name: 'Little Explorer', icon: '✳', description: 'Big adventures start with little steps.', hint: 'Comfy layers and shoes made for your next adventure.', tags: ['adventure', 'sporty', 'nature'], colors: ['#a4bba1', '#8eafd1', '#edcc82'], bg: '#e0e8da' }
  ];
  const byId = Object.fromEntries(ITEMS.map(item => [item.id, item]));
  const clone = value => JSON.parse(JSON.stringify(value));
  const piece = id => ({ id, color: byId[id].color });
  const HEAD_SHAPES=[{id:'oval',name:'Soft oval'},{id:'round',name:'Round'},{id:'heart',name:'Heart'},{id:'square',name:'Soft square'}];
  const PAINT_LIMITS={strokes:48,points:512,perStroke:128};
  const MAX_BACKUP_BYTES=4000000;
  function sanitizeFacePaint(raw){
    const result=[];let remaining=PAINT_LIMITS.points;
    for(const stroke of (Array.isArray(raw)?raw:[]).slice(0,PAINT_LIMITS.strokes)){
      if(!stroke||!['brush','blush','eraser'].includes(stroke.tool)||!Array.isArray(stroke.points))continue;
      const points=[];
      for(const point of stroke.points.slice(0,PAINT_LIMITS.perStroke)){
        if(!remaining)break;
        if(point===null){if(points.length&&points.at(-1)!==null){points.push(null);remaining--;}continue;}
        if(!Array.isArray(point)||point.length!==2||!point.every(Number.isFinite))continue;
        points.push(point.map(n=>Math.round(Math.max(0,Math.min(1,n))*1000)/1000));remaining--;
      }
      while(points.at(-1)===null)points.pop();
      if(points.length)result.push({tool:stroke.tool,color:COLORS.some(c=>c.hex===stroke.color)?stroke.color:COLORS[0].hex,size:Number.isFinite(stroke.size)?Math.round(Math.max(.012,Math.min(.13,stroke.size))*1000)/1000:.045,mirror:stroke.mirror===true,points});
    }
    return result;
  }
  function addPaintStroke(outfit,stroke){
    const paint=sanitizeFacePaint(outfit.facePaint),nextStroke=sanitizeFacePaint([stroke])[0];
    if(!nextStroke||paint.length>=PAINT_LIMITS.strokes||paint.reduce((n,s)=>n+s.points.length,0)+nextStroke.points.length>PAINT_LIMITS.points)return null;
    const next=clone(outfit);next.facePaint=[...paint,nextStroke];return next;
  }
  function defaultOutfit() {
    return { dress: piece('petal'), top: null, bottom: null, shoes: piece('maryjanes'), hair: 'waves', hairColor: '#493027', skin: '#d39c79', headShape:'oval', facePaint:[], makeup: 'fresh-face', makeupColor: '#db91a5', extras: { head: piece('hair-bow'), bag: null, neck: null, back: null, ears:null, wrist:null, pet:null } };
  }
  function selection(outfit, item) {
    if (item.category === 'hair') return outfit.hair === item.id;
    if (item.category === 'makeup') return (outfit.makeup || 'fresh-face') === item.id;
    if (item.category === 'extras') return outfit.extras[item.slot]?.id === item.id;
    const key = { dresses: 'dress', tops: 'top', bottoms: 'bottom', shoes: 'shoes' }[item.category];
    return outfit[key]?.id === item.id;
  }
  function equip(outfit, id) {
    const item = Object.hasOwn(byId, id) ? byId[id] : null;
    if (!item) return clone(outfit);
    const next = clone(outfit);
    if(id==='fresh-face')next.facePaint=[];
    if (item.category !== 'extras' && selection(next, item)) return next;
    if (item.category === 'hair') next.hair = id;
    else if (item.category === 'makeup') { next.makeup = id; next.makeupColor = item.color; }
    else if (item.category === 'extras') next.extras[item.slot] = selection(next, item) ? null : piece(id);
    else if (item.category === 'dresses') { next.dress = piece(id); next.top = null; next.bottom = null; }
    else if (item.category === 'tops') { next.dress = null; next.top = piece(id); next.bottom ||= piece('pleated'); }
    else if (item.category === 'bottoms') { next.dress = null; next.bottom = piece(id); next.top ||= piece('tee'); }
    else next.shoes = piece(id);
    return next;
  }
  // A drop always puts an item on; only clicking an accessory toggles it off.
  function wear(outfit, id) {
    const item = Object.hasOwn(byId, id) ? byId[id] : null;
    return id!=='fresh-face'&&item&&selection(outfit,item)?clone(outfit):equip(outfit,id);
  }
  function recolor(outfit, id, color) {
    const next = clone(outfit);
    const item = Object.hasOwn(byId, id) ? byId[id] : null;
    if (!item || !selection(next, item)) return next;
    if (item.category === 'hair') {
      if (HAIR_COLORS.some(c => c.hex === color)) next.hairColor = color;
    } else if (item.category === 'makeup') {
      if (item.shape !== 'none' && COLORS.some(c => c.hex === color)) next.makeupColor = color;
    } else if (COLORS.some(c => c.hex === color)) {
      const target = item.category === 'extras' ? next.extras[item.slot] : next[{ dresses: 'dress', tops: 'top', bottoms: 'bottom', shoes: 'shoes' }[item.category]];
      target.color = color;
    }
    return next;
  }
  function worn(outfit) { return [outfit.dress, outfit.top, outfit.bottom, outfit.shoes, ...Object.values(outfit.extras)].filter(Boolean); }
  function randomOutfit(outfit, random = Math.random) {
    const pick = array => array[Math.min(array.length - 1, Math.floor(random() * array.length))];
    let next = defaultOutfit();
    next.skin = outfit.skin;
    next.headShape=outfit.headShape||'oval';next.facePaint=sanitizeFacePaint(outfit.facePaint);
    next.makeup = outfit.makeup || 'fresh-face'; next.makeupColor = outfit.makeupColor || '#db91a5';
    const palette = pick(COLORS).hex;
    if (random() > 0.35) next = equip(next, pick(ITEMS.filter(i => i.category === 'dresses')).id);
    else { next = equip(next, pick(ITEMS.filter(i => i.category === 'tops')).id); next = equip(next, pick(ITEMS.filter(i => i.category === 'bottoms')).id); }
    next = equip(next, pick(ITEMS.filter(i => i.category === 'shoes')).id);
    next.hair = pick(ITEMS.filter(i => i.category === 'hair')).id;
    next.hairColor = pick(HAIR_COLORS).hex;
    next.extras.head = piece(pick(ITEMS.filter(i => i.slot === 'head')).id);
    next.extras.bag = random() > 0.5 ? piece(pick(ITEMS.filter(i => i.slot === 'bag')).id) : null;
    for (const p of worn(next)) if (random() > 0.35) p.color = palette;
    return next;
  }
  function score(outfit, themeId) {
    const theme = THEMES.find(t => t.id === themeId) || THEMES[0];
    const pieces = worn(outfit);
    const matches = pieces.filter(p => byId[p.id]?.tags.some(tag => theme.tags.includes(tag))).length;
    const palette = pieces.some(p => theme.colors.includes(p.color));
    const stars = 3 + Number(matches >= 2) + Number(matches >= 3 && palette);
    return {
      stars, title: stars === 5 ? 'A little bit of magic!' : stars === 4 ? 'Hello, style star!' : 'Uniquely, wonderfully you!',
      description: stars === 5 ? `Your colors and pieces bring ${theme.name} to life. What a lovely way to tell a story!` : stars === 4 ? `Your outfit has a lovely ${theme.name} feeling. Try a theme-inspired color or another accessory for more stars!` : 'You brought your own imagination to the runway. Try pieces and colors inspired by the theme for more stars!',
      badges: ['Your own creation', ...(matches >= 2 ? ['Theme dream'] : []), ...(palette ? ['Color story'] : [])]
    };
  }
  function sanitizeOutfit(raw) {
    const fallback = defaultOutfit();
    if (!raw || typeof raw !== 'object') return fallback;
    const safePiece = (p, category, slot) => p && typeof p.id === 'string' && Object.hasOwn(byId, p.id) && byId[p.id].category === category && (!slot || byId[p.id].slot === slot) ? { id: p.id, color: COLORS.some(c => c.hex === p.color) ? p.color : byId[p.id].color } : null;
    const result = {
      dress: safePiece(raw.dress, 'dresses'), top: safePiece(raw.top, 'tops'), bottom: safePiece(raw.bottom, 'bottoms'), shoes: safePiece(raw.shoes, 'shoes') || fallback.shoes,
      hair: ITEMS.some(i => i.category === 'hair' && i.id === raw.hair) ? raw.hair : fallback.hair,
      hairColor: HAIR_COLORS.some(c => c.hex === raw.hairColor) ? raw.hairColor : fallback.hairColor,
      skin: SKIN_TONES.some(c => c.hex === raw.skin) ? raw.skin : fallback.skin, extras: {}
    };
    result.makeup = ITEMS.some(i => i.category === 'makeup' && i.id === raw.makeup) ? raw.makeup : 'fresh-face';
    result.makeupColor = COLORS.some(c => c.hex === raw.makeupColor) ? raw.makeupColor : byId[result.makeup].color;
    result.headShape=HEAD_SHAPES.some(s=>s.id===raw.headShape)?raw.headShape:'oval';result.facePaint=sanitizeFacePaint(raw.facePaint);
    if (result.dress) { result.top = null; result.bottom = null; }
    else { result.top ||= piece('tee'); result.bottom ||= piece('pleated'); }
    for (const slot of ['head', 'bag', 'neck', 'back', 'ears', 'wrist', 'pet']) result.extras[slot] = safePiece(raw.extras?.[slot], 'extras', slot);
    return result;
  }
  const FRIEND_NAMES=['Poppy','Nova','Jules'];
  const STYLING_REQUESTS=[
    {id:'halloween',name:'Halloween party',icon:'🎃',collection:'halloween',copy:'Will you help me choose a costume for the Halloween party? A hat or a little pet could come too!'},
    {id:'concert',name:'Pop-star concert',icon:'✦',collection:'',copy:'I’m off to a concert! Can you make me a look for singing and dancing? I’d love to match with you.'},
    {id:'garden',name:'Garden picnic',icon:'✿',collection:'',copy:'Let’s dress up for a picnic with our friends. Flowers, favorite colors, or your own idea — you choose!'}
  ];
  function matchOutfit(source,target){
    const result=sanitizeOutfit(target),clothes=sanitizeOutfit(source);
    for(const key of ['dress','top','bottom','shoes','extras'])result[key]=clone(clothes[key]);
    return result;
  }
  function sanitizeFriends(raw){
    const seen=new Set();
    return (Array.isArray(raw)?raw:[]).filter(f=>f&&FRIEND_NAMES.includes(f.name)&&f.outfit&&!seen.has(f.name)&&(seen.add(f.name),true)).map(f=>({name:f.name,outfit:sanitizeOutfit(f.outfit)}));
  }
  function sanitizeFriendStyles(raw){
    const result={};
    for(const [i,name]of FRIEND_NAMES.entries())if(raw&&Object.hasOwn(raw,name)&&raw[name]?.outfit){
      result[name]={outfit:sanitizeOutfit(raw[name].outfit),occasion:STYLING_REQUESTS.some(r=>r.id===raw[name].occasion)?raw[name].occasion:STYLING_REQUESTS[i].id};
    }
    return result;
  }
  const PHOTO_BACKGROUNDS = [
    {id:'rose',name:'Rose garden',icon:'✿',color:'#efd1db'},
    {id:'stars',name:'Starlight',icon:'✦',color:'#53486f'},
    {id:'halloween',name:'Halloween',icon:'☾',color:'#b599cc'},
    {id:'clouds',name:'Candy clouds',icon:'☁',color:'#bcdce6'}
  ];
  const PHOTO_STICKERS = [
    {id:'heart',name:'Heart',icon:'♡'}, {id:'star',name:'Star',icon:'✦'},
    {id:'flower',name:'Flower',icon:'✿'}, {id:'bow',name:'Bow',icon:'🎀'},
    {id:'pumpkin',name:'Pumpkin',icon:'🎃'}, {id:'ghost',name:'Friendly ghost',icon:'👻'},
    {id:'paw',name:'Paw print',icon:'🐾'}, {id:'sparkle',name:'Sparkles',icon:'✨'}
  ];
  function sanitizePhoto(raw){
    if(!raw||typeof raw!=='object'||Array.isArray(raw))return null;
    const clamp=(value,fallback,min,max)=>Number.isFinite(value)?Math.min(max,Math.max(min,value)):fallback;
    const friends=sanitizeFriends(raw.friends);
    return {background:PHOTO_BACKGROUNDS.some(b=>b.id===raw.background)?raw.background:'rose',friends,
      stickers:(Array.isArray(raw.stickers)?raw.stickers:[]).filter(s=>s&&PHOTO_STICKERS.some(p=>p.id===s.id)).slice(0,12).map(s=>({id:s.id,x:clamp(s.x,.5,.04,.96),y:clamp(s.y,.5,.04,.96),size:clamp(s.size,.085,.05,.16)}))};
  }
  function sanitizeLooks(raw) {
    if (!Array.isArray(raw)) return [];
    const seen = new Set();
    return raw.filter(look => {
      if (!look || typeof look.id !== 'string' || !/^[a-zA-Z0-9-]{1,80}$/.test(look.id) || seen.has(look.id) || !look.outfit) return false;
      seen.add(look.id); return true;
    }).slice(0, 40).map(look => ({ id: look.id, name: typeof look.name === 'string' ? look.name.slice(0, 40) : 'My lovely look', themeId: THEMES.some(t => t.id === look.themeId) ? look.themeId : THEMES[0].id, outfit: sanitizeOutfit(look.outfit), pose:Number.isInteger(look.pose)&&look.pose>=0&&look.pose<POSES.length?look.pose:1, date: typeof look.date === 'string' && !Number.isNaN(Date.parse(look.date)) ? look.date : new Date(0).toISOString(),...(look.photo?{photo:sanitizePhoto(look.photo)}:{}),...(Array.isArray(look.friends)?{friends:sanitizeFriends(look.friends)}:{}) }));
  }
  function remainingSeconds(deadline, now) { return Math.max(0, Math.ceil((deadline - now) / 1000)); }
  function readBackupData(text){
    if(typeof text!=='string'||text.length>MAX_BACKUP_BYTES)throw new Error('Choose a Style Club backup smaller than 4 MB.');
    let raw;try{raw=JSON.parse(text);}catch{throw new Error('That file could not be read. Choose a Style Club backup (.json).');}
    if(raw?.format!=='style-club-lookbook'||raw.version!==1||!Array.isArray(raw.looks))throw new Error('That is not a supported Style Club lookbook backup.');
    return {looks:sanitizeLooks(raw.looks),friendStyles:sanitizeFriendStyles(raw.friendStyles)};
  }
  function readBackup(text){return readBackupData(text).looks;}
  function mergeLooks(existing,incoming){
    const current=sanitizeLooks(existing),known=new Set(current.map(l=>l.id));
    const additions=sanitizeLooks(incoming).filter(l=>!known.has(l.id));
    if(current.length+additions.length>40)throw new Error('Your lookbook has room for 40 looks. Keep a backup, then remove a few looks before restoring this file.');
    return{looks:[...additions,...current],added:additions.length};
  }
  return { COLORS, HAIR_COLORS, SKIN_TONES, HEAD_SHAPES, PAINT_LIMITS, MAX_BACKUP_BYTES, CATEGORIES, ITEMS, POSES, THEMES, PHOTO_BACKGROUNDS, PHOTO_STICKERS, FRIEND_NAMES, STYLING_REQUESTS, byId, clone, defaultOutfit, selection, equip, wear, recolor, worn, randomOutfit, score, sanitizeOutfit, sanitizeLooks, sanitizePhoto, sanitizeFriends, sanitizeFriendStyles, sanitizeFacePaint, addPaintStroke, matchOutfit, readBackupData, readBackup, mergeLooks, remainingSeconds };
});
