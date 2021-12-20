---
title: How to deploy your Nuxt.js Projects with Drone CI and Docker Compose
description: In this short blogpost I'll explain how to deploy your Nuxt.js projects with Drone CI and Docker Compose.
---
# How to deploy your Nuxt.js Projects with Drone CI and Docker Compose
<br>
In this short blogpost I'll explain how to deploy your Nuxt.js projects with Drone CI and Docker Compose.<br>
I assume you have a running Drone CI installation with a Docker runner.
You can find the source code with an example project using this setup (actually it's this blog you are currently reading) here: <a href="https://github.com/wug-ge/wug.ge/">Wug.ge Github repo</a>
<br>
<br>
Basically,it comes down to 3 simple steps:<br>
<br>
- Install node_modules & build the App

```yml
- name: build
  image: node:16
  commands:
  - npm install
  - npm run build
```
<br>
- Build & publish Dockerfile

```yml
- name: publish
  image: plugins/docker
  settings:
    repo: wugge/wug.ge
    tags: [ "${DRONE_COMMIT_SHA:0:7}","latest" ]
    username:
      from_secret: docker_username
    password:
      from_secret: docker_password
```
<br>
- deploy the app (stop, pull & up docker-compose)

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

