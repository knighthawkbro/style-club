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
- **All 117 pieces are out in the shops**. Walk around the wall racks and two-level shelves to discover them. Displays show the actual garment, hairstyle, pet, or accessory you will wear; nothing needs a rack page or a menu to appear.
- Click the room, then use **WASD** or **arrow keys** to move. On-screen arrows also work with a mouse or touch.
- **Drag** the room to turn the camera. Press **E**, or the nearby-rack button, to try the closest station.
- **Outfit view** brings the camera close. Drag or use the turn buttons to inspect the front, sides, and back. **Explore** returns to walking.
- Open **Mall map** to walk to a boutique, or explore freely. Petal & Thread has dresses; Sunday Studio has tops; Mix & Match has bottoms; Sole Mates has shoes; GLOW beauty has makeup; Charm & Co. has hair, jewelry, accessories, and pets. BOO-tique has Halloween costumes, and The Velvet Lounge has the free VIP collection. You can also use the dressing-room tabs at any time.
- Walk to the runway, or use **Ready for the runway**, to watch the character strut and pose while twelve guests clap and cheer.
- **Makeup** opens a close-up view with eleven preset choices. **Draw my own makeup** opens a large front-facing 3D mirror: draw directly on the face with a mouse or finger, choose a fine brush or soft blush, change colors and brush sizes, and use the eraser or **Undo brush stroke**. **Both cheeks together** reflects each stroke; switch it off for different designs on each side. Arrow keys move the brush and Space makes a dot. **Clear my drawing** keeps the base preset; **Wash everything off** clears both.
- Choose **Soft oval**, **Round**, **Heart**, or **Soft square** in the mirror or the Makeup and Hair & you tabs. Hair, face paint, and head accessories follow the shape. Custom drawings and head shapes stay with the character in the mall, runway, photos, saved looks, and backups. They also work while styling a friend.
- **Strike a pose** opens sixteen named poses, including Runway classic, Cover star, Over the shoulder, Cross step, and Frame the face. Walking temporarily animates the legs and returns to the selected pose when you stop. Your pose is used on the runway and saved with its picture.
- **Full screen** expands the whole game, including its wardrobe. Use **Exit full screen** or Escape to return. Browsers that cannot enter native fullscreen still expand the game to fill their window.
- Poppy, Nova, and Jules wander between shops, try clothes, and give friendly compliments in speech bubbles. They notice a new outfit, hair color, hairstyle, makeup, jewelry, or pet. Click a nearby friend, press **F**, or choose **Say hi**. **Pose together** makes a matching pose. The **3 mall friends** button switches to a quiet room.
- **Shopping friends** invites Poppy, Nova, or Jules to follow you between shops. Ask for an **Outfit idea**, then choose **Try** to wear it. Your companion joins the runway, and **See you later** sends her back to exploring. Switching friends or choosing a quiet mall ends the previous invitation.
- **Be a stylist** lets you dress Poppy, Nova, or Jules for a Halloween party, pop-star concert, or garden picnic. Choose **Style** beside a friend, then drag clothes onto her or use any wardrobe tab. **Match my outfit** copies your clothes while keeping her hair, makeup, and skin tone. **Done** returns to your own character. Friends keep your choices as they explore, and their outfits save automatically. Requests are optional, with no timer or score to beat.
- Choose **Everyone to runway** in the friends picker or styling panel for a four-person fashion show. Save the group to your lookbook, download its picture, or use **Style again** to bring back everyone's outfits.
- Click the physical benches or choose **Sit together** to walk to a free seat. Your invited friend takes the neighboring seat. **Done**, movement keys, or another activity gets you up again.
- Click the **Salon chair** at Charm & Co. to sit, choose hair and colors, and see the result in a clear front-facing view. Chair and dressing-mirror cameras stay inside their boutique, away from neighboring walls and displays. The active mirror and counter move out of the camera view while the chair stays visible. At GLOW beauty, the **Makeup vanity** turns the camera into an unobstructed front-facing mirror. Choose **Draw my own makeup** below the wardrobe tabs to paint your own design. Presets still work: pick a design and color, then drag the brush onto your character, tap your face, or choose **Apply face paint**. **Wash off** starts fresh. Dressing mirrors in the clothing and shoe shops show the current outfit while you try pieces and poses.
- The **Photo booth** is at the end of the promenade. Choose Rose garden, Starlight, Halloween, or Candy clouds; include any of the three friends, your held pet, and a pose. Add up to twelve stickers and drag them into place (arrow keys also work; Delete removes the focused sticker). Save the photo to **My lookbook** and download its PNG there. Closing an unsaved photo leaves the outfit unchanged.
- Sole Mates includes **Bow step heels** with chunky heels and **Starlight heels** with sparkly details. Both have fitted 3D heel shapes, colors, and draggable physical displays.
- Characters turn and lower into chairs gradually. Picking up rack clothes reaches with the free hand; changing clothes and hair adds a brief styling gesture. Applying makeup lifts a colored brush or sponge to the face. Heels use shorter steps and a slower, upright walk. A held pet stays supported in the other arm; reduced-motion mode skips these brief gestures.

## Included

- 94 clothing and accessory pieces, 12 hairstyles, six skin tones, 14 clothing colors, and 18 hair colors.
- 19 VIP pieces and 14 Halloween choices: pearl and velvet gowns, exclusive jewelry, costumes, hats, boots, wings, and face paint. Every item is available without a purchase.
- Eleven makeup and face-paint presets, freehand makeup with mirrored drawing and erasing, four head shapes, sixteen poses, three autonomous shoppers, rack dragging, and fullscreen controls.
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

The current outfit, styled friends, and lookbook are stored in this browser on this device. Other browsers, private windows, different local addresses, and opening `index.html` directly may have separate storage. **Download lookbook backup** keeps saved outfits, group runway looks, booth photos, and friends' current styles in a small JSON file. **Restore a backup** adds missing looks and friend styles without replacing existing ones; duplicate IDs are skipped. Older backups still work. Photos store the outfits, poses, backdrop, and sticker positions so they can be recreated without filling browser storage with image files. PNG downloads keep a separate finished picture. Clearing site data removes browser saves, so keep the backup somewhere safe first. Already erased saves cannot be recovered without a backup or another browser that still has them. If storage is blocked or full, the game still works and explains that saving is temporary.

This is an original solo 3D fashion mall, unaffiliated with Roblox or Dress to Impress. The character, clothes, and room are procedural original artwork. There are no multiplayer servers or copied game assets. The model uses articulated parts and fitted clothing geometry; it does not simulate cloth physics.

## Development

Vanilla HTML/CSS/JavaScript and Three.js, bundled locally into `scene3d.js`. Node.js built-ins provide the preview server and tests. The shipped game never loads code from a CDN.

```text
npm start       Start the local preview
npm run build   Rebuild the offline 3D bundle and refresh asset version links
npm run check   Check JavaScript syntax
npm test        Run the game rules and artwork tests
```

- `game.js`: wardrobe catalog, outfit rules, scoring, randomization, saved-data validation.
- `src/model3d.mjs`: body geometry, fitted garments, joint hierarchy, faces, hairstyles, pets, and joint animation.
- `src/scene3d.mjs`: mall scene, lighting, camera, controls, rack interaction, runway, and 3D portrait rendering.
- `src/mall.mjs`: mall architecture, shop interiors, displays, and camera cutaways.
- `src/shop-displays.mjs`: physical racks, shelves, item labels, and draggable previews made from the wearable geometry.
- `src/activity-spots.mjs`: salon seats, makeup tools, dressing mirrors, and the mall photo booth.
- `src/makeup-mirror.mjs`: front-facing camera and pointer/keyboard drawing on the 3D face.
- `src/face-paint.mjs`: custom drawing textures, mirrored strokes, erasers, and fitted head shapes.
- `src/photo-booth.mjs`: group portraits, illustrated backdrops, and movable sticker artwork.
- `src/motion.mjs`: sixteen pose targets and distance-driven steps with planted feet.
- `src/interactions.mjs`: gradual chair transitions and gestures for clothes, hair, brushes, and sponges.
- `src/audience.mjs`: lightweight clapping and cheering runway guests.
- `src/world-rules.mjs`: movement, collision, station locations, and click-to-walk pathfinding.
- `src/shoppers.mjs`: autonomous local shopper routes, browsing, outfit changes, and personal space.
- `src/friend-talk.mjs`: prewritten greetings and comments about styling changes.
- `art.js`: illustrated wardrobe thumbnails and graphics-unavailable fallback.
- `app.js`: interactions, local storage, timer, sound, dialogs, and lookbook.
- `styles.css` and `world.css`: desktop and mobile presentation.
- `server.js`: a static server with an explicit public-file allowlist; defaults to loopback for local previews and uses `HOST=0.0.0.0` inside Docker.
- `version-assets.mjs`: gives changed scripts and styles new URLs during game and Docker builds, preventing cached files from an older release from mixing with the new page.
- `Dockerfile`, `compose.yaml`, and `.env.example`: deployment of the bundled game to a Docker host.

No installation or build step is needed to play the bundled copy. For development, run `npm ci` once. Three.js and esbuild versions are pinned in the lockfile. The Three.js MIT license is included in `vendor/THREE-LICENSE.txt`. To add a wardrobe piece, update its catalog entry, illustrated thumbnail, and 3D geometry, then run `npm run build`.
