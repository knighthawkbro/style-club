# Style Club

An original, single-player 3D dress-up game for ages 6–9. Explore a compact, single-floor fashion mall, discover clothes on the racks, customize a fitted 3D character, and walk the runway. No Roblox account, installation, or network connection is needed to play the included build.

## Play

**Easiest:** extract the whole `Style Club.zip`, then double-click `index.html`. Keep the extracted files together, including `scene3d.js`, `world.css`, and the `vendor` folder. The 3D graphics require WebGL 2 in a recent browser; if graphics cannot start, the game explains this and offers the illustrated outfit view.

**Local preview:** with Node.js 18 or newer installed, run `npm start` in this folder, then open **http://127.0.0.1:4173**. No dependency installation is required. The server accepts connections from this computer only.

**Docker host:** extract `Style Club Docker.zip` on your Docker host and run `docker compose up -d --build`. Open `http://YOUR-DOCKER-HOST:8080` from a browser. See [DOCKER.md](DOCKER.md) for ports, updates, and reverse-proxy setup. The game runs independently of this PC once deployed.

Pick clothes and colors, customize hair and skin tone, and take the outfit to the runway. Save favorite looks in **My lookbook** or download PNG pictures of the actual 3D outfit. Existing outfits from the original version carry over automatically.

## Explore and dress up

- Click or tap the floor to walk. Click a rack to walk over and open its clothes. Routes go around furniture.
- Use the mouse to **drag a garment straight off a 3D rack onto your character**. A highlighted target shows where to drop it. You can also drag dressing-room cards. Dropping elsewhere cancels; Escape cancels a held piece. Clicking and tapping still work.
- **All 115 pieces are out in the shops**. Walk around the wall racks and two-level shelves to discover them. Displays show the actual garment, hairstyle, pet, or accessory you will wear; nothing needs a rack page or a menu to appear.
- Click the room, then use **WASD** or **arrow keys** to move. On-screen arrows also work with a mouse or touch.
- **Drag** the room to turn the camera. Press **E**, or the nearby-rack button, to try the closest station.
- **Outfit view** brings the camera close. Drag or use the turn buttons to inspect the front, sides, and back. **Explore** returns to walking.
- Open **Mall map** to walk to a boutique, or explore freely. Petal & Thread has dresses; Sunday Studio has tops; Mix & Match has bottoms; Sole Mates has shoes; GLOW beauty has makeup; Charm & Co. has hair, jewelry, accessories, and pets. BOO-tique has Halloween costumes, and The Velvet Lounge has the free VIP collection. You can also use the dressing-room tabs at any time.
- Walk to the runway, or use **Ready for the runway**, to watch the character strut and pose while twelve guests clap and cheer.
- **Makeup** opens a close-up view with eleven choices, including Fresh face to wash it off. Choose a paint color or use Face view whenever you like.
- **Strike a pose** opens sixteen named poses, including Runway classic, Cover star, Over the shoulder, Cross step, and Frame the face. Walking temporarily animates the legs and returns to the selected pose when you stop. Your pose is used on the runway and saved with its picture.
- **Full screen** expands the whole game, including its wardrobe. Use **Exit full screen** or Escape to return. Browsers that cannot enter native fullscreen still expand the game to fill their window.
- Poppy, Nova, and Jules wander between shops, try clothes, and give friendly compliments in speech bubbles. They notice a new outfit, hair color, hairstyle, makeup, jewelry, or pet. Click a nearby friend, press **F**, or choose **Say hi**. **Pose together** makes a matching pose. The **3 mall friends** button switches to a quiet room.

## Included

- 92 clothing and accessory pieces, 12 hairstyles, six skin tones, 14 clothing colors, and 18 hair colors.
- 19 VIP pieces and 14 Halloween choices: pearl and velvet gowns, exclusive jewelry, costumes, hats, boots, wings, and face paint. Every item is available without a purchase.
- Eleven makeup and face-paint choices, sixteen poses, three autonomous shoppers, rack dragging, and fullscreen controls.
- Eight nearby boutiques around a tiled mall promenade, with a fountain, benches, shop windows, a directory, furniture collision, smooth click-to-walk routes, and interactive racks.
- Complete garments around the body, joint-attached sleeves and trousers, hidden covered skin, and 360-degree outfit inspection.
- Six themes: Garden Party, Fairy Tale, Cozy Sunday, Starlight Soirée, Hello Sunshine, and Little Explorer.
- Free play and an optional three-minute challenge with start, pause, and resume.
- Five pets to hold: a bow kitten, bandana puppy, bunny, VIP poodle, and royal kitten. Earrings, bracelets, necklaces, bags, hats, wings, and pets have separate accessory slots. Tap an equipped extra to remove it; undo and random outfits remain available.
- A runway reveal with encouraging, deterministic theme and color feedback.
- A local lookbook for up to 40 outfits, outfit reuse, and picture downloads.
- Responsive layouts, keyboard controls, labeled buttons, reduced-motion support, and optional synthesized sounds.

## For parents

There are no accounts, strangers, online chat, ads, purchases, trackers, outside fonts, or third-party requests. All wardrobe items are available from the start. Scores are based only on the clothes, accessories, colors, and theme. Skin tone, hairstyle, and makeup do not change scores. The other shoppers use friendly, prewritten comments that run entirely on this device; there is no text entry or connection to an AI service.

The timer pauses when the page becomes hidden, when an in-game dialog opens, or when the child opens the lookbook. It stays paused until explicitly resumed. Closing or refreshing the game resets the timer.

The current outfit and lookbook are stored in this browser on this device. Other browsers, private windows, different local addresses, and opening `index.html` directly may have separate storage. Clearing browser data removes saved looks. Download favorite pictures to keep a durable copy. If storage is blocked or full, the game still works and explains that saving is temporary.

This is an original solo 3D fashion mall, unaffiliated with Roblox or Dress to Impress. The character, clothes, and room are procedural original artwork. There are no multiplayer servers or copied game assets. The model uses articulated parts and fitted clothing geometry; it does not simulate cloth physics.

## Development

Vanilla HTML/CSS/JavaScript and Three.js, bundled locally into `scene3d.js`. Node.js built-ins provide the preview server and tests. The shipped game never loads code from a CDN.

```text
npm start       Start the local preview
npm run build   Rebuild the offline 3D bundle after source changes
npm run check   Check JavaScript syntax
npm test        Run the game rules and artwork tests
```

- `game.js`: wardrobe catalog, outfit rules, scoring, randomization, saved-data validation.
- `src/model3d.mjs`: body geometry, fitted garments, joint hierarchy, faces, hairstyles, pets, and joint animation.
- `src/scene3d.mjs`: mall scene, lighting, camera, controls, rack interaction, runway, and 3D portrait rendering.
- `src/mall.mjs`: mall architecture, shop interiors, displays, and camera cutaways.
- `src/shop-displays.mjs`: physical racks, shelves, item labels, and draggable previews made from the wearable geometry.
- `src/motion.mjs`: sixteen pose targets and distance-driven steps with planted feet.
- `src/audience.mjs`: lightweight clapping and cheering runway guests.
- `src/world-rules.mjs`: movement, collision, station locations, and click-to-walk pathfinding.
- `src/shoppers.mjs`: autonomous local shopper routes, browsing, outfit changes, and personal space.
- `src/friend-talk.mjs`: prewritten greetings and comments about styling changes.
- `art.js`: illustrated wardrobe thumbnails and graphics-unavailable fallback.
- `app.js`: interactions, local storage, timer, sound, dialogs, and lookbook.
- `styles.css` and `world.css`: desktop and mobile presentation.
- `server.js`: a static server with an explicit public-file allowlist; defaults to loopback for local previews and uses `HOST=0.0.0.0` inside Docker.
- `Dockerfile`, `compose.yaml`, and `.env.example`: deployment of the bundled game to a Docker host.

No installation or build step is needed to play the bundled copy. For development, run `npm ci` once. Three.js and esbuild versions are pinned in the lockfile. The Three.js MIT license is included in `vendor/THREE-LICENSE.txt`. To add a wardrobe piece, update its catalog entry, illustrated thumbnail, and 3D geometry, then run `npm run build`.
