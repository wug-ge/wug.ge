FROM node:16

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build
RUN npm run generate

ENV HOST 0.0.0.0
EXPOSE 80

CMD ["npm", "run", "start"]