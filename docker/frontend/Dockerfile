FROM node:22

WORKDIR /app

COPY . .

RUN npm install
RUN npx vitest run
RUN npm run build
# RUN npm run generate

ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]