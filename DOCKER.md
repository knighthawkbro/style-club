# Run Style Club on a Docker host

The Docker package contains the complete, ready-to-play game. You only need Docker Engine with the Docker Compose plugin (Linux containers) on the destination host. No Node.js installation, npm commands, database, GPU, or connection to the original PC is needed on that host. The player's browser renders the 3D graphics.

## Deploy

1. Copy **Style Club Docker.zip** to the Docker host and extract it into a folder, such as `style-club`. Keep the files and the `vendor` folder together. The existing **Style Club.zip** is the direct-open game package; use the Docker ZIP for this deployment.
2. Open a terminal in the extracted folder, beside `compose.yaml`.
3. Start the game:

   ```sh
   docker compose up -d --build
   ```

4. Open `http://YOUR-DOCKER-HOST:8080` in a browser, replacing `YOUR-DOCKER-HOST` with the host's LAN address or name. For example, a host at `192.168.1.50` would serve the game at `http://192.168.1.50:8080`.

The first build downloads the official Node image. The game itself makes no third-party requests. Once deployed, this PC can be turned off.

The default publishes port 8080 on the Docker host's network interfaces. People who can reach that port can open the game; each browser has its own solo game, with no multiplayer or shared chat. To use it across your home network, allow the chosen port on the host's firewall for that network.

## Change the port

Copy `.env.example` to `.env` in the same folder and change:

```dotenv
STYLE_CLUB_PORT=8088
STYLE_CLUB_BIND_ADDRESS=0.0.0.0
```

Run `docker compose up -d` again. The example above makes the game available at `http://YOUR-DOCKER-HOST:8088`. Port 4173 stays internal to the container. The `.env` file is optional; the defaults work without it.

## Check, update, or stop

```sh
docker compose ps
docker compose logs --tail=50 style-club
```

The container should show as **healthy** shortly after starting. It checks the game page automatically and restarts after a process failure or host reboot unless you explicitly stop it. A health check failure reports a problem; it does not itself trigger a restart.

To update, replace the game files with a newer Docker package, keep your `.env` settings, then rebuild:

```sh
docker compose build --pull
docker compose up -d
```

Stop and remove this deployment's container and network:

```sh
docker compose down
```

The service runs as an unprivileged user with a read-only filesystem. It has no host-directory mounts or persistent Docker volumes because it never stores player data on the server.

## Saved outfits

Outfits and the lookbook stay in the player's browser on that device. Rebuilding or restarting the container does not erase them as long as the player uses the same browser and web address. Moving from `127.0.0.1` on this PC to a new host starts a separate browser save area; old looks do not automatically transfer. Changing the hostname, port, or HTTP/HTTPS scheme also changes that save area. Download favorite outfit pictures from the old game before switching if you want to keep copies.

## Optional reverse proxy

The container serves plain HTTP. You can put your existing reverse proxy in front of it and give it a dedicated hostname, forwarding to the Docker host on the configured port. If the proxy runs directly on the same host, set `STYLE_CLUB_BIND_ADDRESS=127.0.0.1` to restrict the published port to that host. A proxy in another container needs a reachable host address or a shared Docker network; its own `127.0.0.1` is not the game container.

For public internet access, use your proxy's HTTPS and access controls if you want the game limited to your family. The game itself has no login screen. Serve it at the hostname root and open the game directly in a browser. The page's existing security policy prevents iframe embedding.

## Source changes

The Docker image copies the included `scene3d.js` bundle. It does not rebuild the 3D source or include development dependencies. When developing changes to `src/`, run `npm ci` and `npm run build` in the source project before building the Docker image. Edits to the standalone HTML, CSS, or JavaScript files only need a Docker rebuild.

Configuration references: [Docker Compose services](https://docs.docker.com/reference/compose-file/services/) and the [official Node image](https://hub.docker.com/_/node).
