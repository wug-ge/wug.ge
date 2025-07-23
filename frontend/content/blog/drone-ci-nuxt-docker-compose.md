---
title: How to deploy your Nuxt.js Projects with Drone CI and Docker Compose
description: In this short blogpost I'll explain how to deploy your Nuxt.js projects with Drone CI and Docker Compose.
sitemap:
  loc: /blog/drone-ci-nuxt-docker-compose
  lastmod: 2024-07-17
  changefreq: monthly
  priority: 0.5
date: '17-07-2024'
---
# How to deploy your Nuxt.js Projects with Drone CI and Docker Compose
<p>
In this short blogpost I'll explain how to deploy your Nuxt.js projects with Drone CI and Docker Compose.<br>
I assume you have a running Drone CI installation with a Docker runner.
You can find the source code with an example project using this setup (actually it's this blog you are currently reading) here: <a href="https://github.com/wug-ge/wug.ge/">Wug.ge Github repo</a>
<br>
<br>
Basically, it comes down to 2 simple steps:<br>
</p>
<br>

## Build Dockerfile & publish image
<p>
The dockerfile takes care of building the app and running it with nuxt's start job:
</p>

```docker
FROM node:16

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build
RUN npm run generate

ENV HOST 0.0.0.0
EXPOSE 80

CMD ["npm", "run", "start"]
```
<br>
<p>
Publish the built image on Dockerhub. Don't forget to put docker_username & docker_password as secrets in your Drone CI repo settings: 

```yml
- name: publish
  image: plugins/docker
  settings:
    repo: "YOUR-DOCKERHUB-USER/YOUR-REPO"
    tags: [ "${DRONE_COMMIT_SHA:0:7}","latest" ]
    username:
      from_secret: docker_username
    password:
      from_secret: docker_password
```
</p>
<br>

## Deploy the app (stop, pull & up docker-compose)

```yml
- name: deploy
  image: docker/compose
  volumes:
    - name: docker_sock
      path: /var/run/docker.sock
  commands:
  - docker-compose -f docker-compose.prod.yml down && docker-compose -f docker-compose.prod.yml pull && docker-compose -f docker-compose.prod.yml up -d
volumes:
  - name: docker_sock
    host:
      path: /var/run/docker.sock
```

Checkout this repo for full source code: <a href="https://github.com/wug-ge/wug.ge/">Wug.ge Github repo</a>
And feel free to contact me for any questions!