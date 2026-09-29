FROM node:24-alpine

ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=4173

WORKDIR /app

# The ready-to-play bundle is included; no npm install or build is needed.
COPY server.js index.html styles.css world.css game.js art.js app.js scene3d.js favicon.svg ./
COPY vendor/THREE-LICENSE.txt ./vendor/THREE-LICENSE.txt

USER node
EXPOSE 4173

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD ["node", "-e", "const http=require('node:http');const req=http.get({host:'127.0.0.1',port:process.env.PORT||4173,path:'/',timeout:3000},res=>{res.resume();res.on('end',()=>process.exit(res.statusCode===200?0:1));});req.on('error',()=>process.exit(1));req.on('timeout',()=>{req.destroy();process.exit(1);});"]

CMD ["node", "server.js"]
