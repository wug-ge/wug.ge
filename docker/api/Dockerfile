FROM node:20

COPY . .

WORKDIR /api

RUN npm install
RUN npm run build

CMD  ["node", "dist/index.js"]