<template>
  <div
    class="bg-slight-grey text-accent-1 justify-center items-center flex text-center p-3.5"
  >
    <div class="container">
      <h1 class="md:text-5xl text-3xl r rounded py-4 px-4 inline-block text-center font-light">my tech stack</h1>

      <!-- <client-only> -->
      <!-- <v-chart class="h-[100vh] w-full" :option="option" autoresize /> -->
      <!-- </client-only> -->
      <div class="grid grid-cols-6">
        <div class=" h-96 col-span-6 md:col-span-3">
          <index-tech-stack-backend class="h-96" />
        </div>
        <div class=" h-96 col-span-6 md:col-span-3">
          <index-tech-stack-frontend />
        </div>
        <div class="h-96 col-span-6 md:col-span-2">
          <index-tech-stack-databases class="h-96" />
        </div>
        <div class="h-96 col-span-6 md:col-span-4">
          <index-tech-stack-dev-ops class="h-96" />
        </div>
      </div>
    </div>

    <!-- <div>
      <br />
      <div
        class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <card
          v-for="(tech, i) in techStack"
          :key="i"
          class="relative text-center rounded"
        >
          <img
            class="w-20 mx-auto bg-primary p-4 rounded"
            :src="tech.logo"
            :alt="tech.name"
          />
          <div class="text p-6">
            {{ tech.description }}
          </div>
        </card>
      </div>
      <br />
      <a class="text-xl" href="https://github.com/wug-ge">see some code ></a>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { Tech } from "@/lib/models/Tech";

// import VChart from "vue-echarts";
// import { use } from "echarts/core";
// import { CanvasRenderer } from "echarts/renderers";
// import { GraphChart } from "echarts/charts";
// import {
// TitleComponent,
// TooltipComponent,
// LegendComponent,
// GridComponent,
// } from "echarts/components";r
//
//
// use([
// CanvasRenderer,
// GraphChart,
// TitleComponent,
// TooltipComponent,
// LegendComponent,
// GridComponent,
// ]);
//
// const data = [
// { "name": "Backend", "x": 300, "y": 300, "symbolSize": 60 },
// { "name": "Node.js", "x": 100, "y": 200, "symbolSize": 40 },
// { "name": "Express.js", "x": 150, "y": 100, "symbolSize": 40 },
// { "name": "NestJS", "x": 150, "y": 300, "symbolSize": 40 },
// { "name": "PHP", "x": 150, "y": 400, "symbolSize": 30 },
// { "name": "Socket.IO", "x": 150, "y": 500, "symbolSize": 40 },
// { "name": "TypeORM", "x": 150, "y": 600, "symbolSize": 40 },
// { "name": "Prisma.js", "x": 150, "y": 700, "symbolSize": 40 },
// { "name": "Frontend", "x": 1400, "y": 300, "symbolSize": 60 },
// { "name": "Vue.js", "x": 1600, "y": 200, "symbolSize": 40 },
// { "name": "Nuxt.js", "x": 1550, "y": 100, "symbolSize": 40 },
// { "name": "Tailwind CSS", "x": 1550, "y": 300, "symbolSize": 40 },
// { "name": "SCSS", "x": 1600, "y": 400, "symbolSize": 40 },
// { "name": "Languages", "x": 800, "y": 100, "symbolSize": 60 },
// { "name": "TypeScript", "x": 800, "y": 50, "symbolSize": 40 },
// { "name": "DevOps", "x": 800, "y": 500, "symbolSize": 60 },
// { "name": "Docker", "x": 800, "y": 600, "symbolSize": 40 },
// { "name": "Docker Swarm", "x": 850, "y": 700, "symbolSize": 40 },
// { "name": "Drone CI", "x": 900, "y": 550, "symbolSize": 40 },
// { "name": "GitLab CI", "x": 900, "y": 650, "symbolSize": 40 },
// { "name": "Gitea", "x": 700, "y": 550, "symbolSize": 40 },
// { "name": "Kuma Uptime", "x": 700, "y": 650, "symbolSize": 40 },
// { "name": "Sentry", "x": 750, "y": 750, "symbolSize": 40 },
// { "name": "MinIO", "x": 750, "y": 850, "symbolSize": 40 },
// { "name": "Grafana", "x": 750, "y": 950, "symbolSize": 40 },
// { "name": "Prometheus", "x": 750, "y": 1050, "symbolSize": 40 },
// { "name": "Traefik", "x": 750, "y": 1150, "symbolSize": 40 },
// { "name": "Cloudflare", "x": 750, "y": 1250, "symbolSize": 40 },
// { "name": "Keycloak", "x": 750, "y": 1350, "symbolSize": 40 },
// { "name": "Operating Systems", "x": 1900, "y": 500, "symbolSize": 60 },
// { "name": "Arch Linux", "x": 2000, "y": 450, "symbolSize": 40 },
// { "name": "Debian", "x": 2000, "y": 550, "symbolSize": 40 },
// { "name": "Ubuntu", "x": 2000, "y": 650, "symbolSize": 40 },
// { "name": "Databases", "x": 500, "y": 600, "symbolSize": 60 },
// { "name": "MariaDB", "x": 400, "y": 700, "symbolSize": 40 },
// { "name": "MySQL", "x": 500, "y": 700, "symbolSize": 40 },
// { "name": "PostgreSQL", "x": 600, "y": 700, "symbolSize": 40 },
// { "name": "Redis", "x": 500, "y": 800, "symbolSize": 40 },
// { "name": "Messaging Systems", "x": 1100, "y": 700, "symbolSize": 60 },
// { "name": "RabbitMQ", "x": 1100, "y": 800, "symbolSize": 40 },
// { "name": "API Documentation", "x": 300, "y": 500, "symbolSize": 60 },
// { "name": "OpenAPI", "x": 100, "y": 500, "symbolSize": 40 }
// ]

// const links = [
// { "source": "Backend", "target": "Node.js" },
// { "source": "Backend", "target": "Express.js" },
// { "source": "Backend", "target": "NestJS" },
// { "source": "Backend", "target": "PHP" },
// { "source": "Backend", "target": "Socket.IO" },
// { "source": "Backend", "target": "TypeORM" },
// { "source": "Backend", "target": "Prisma.js" },
// { "source": "Frontend", "target": "Vue.js" },
// { "source": "Frontend", "target": "Nuxt.js" },
// { "source": "Frontend", "target": "Tailwind CSS" },
// { "source": "Frontend", "target": "SCSS" },
// { "source": "Languages", "target": "TypeScript" },
// { "source": "DevOps", "target": "Docker" },
// { "source": "DevOps", "target": "Docker Swarm" },
// { "source": "DevOps", "target": "Drone CI" },
// { "source": "DevOps", "target": "GitLab CI" },
// { "source": "DevOps", "target": "Gitea" },
// { "source": "DevOps", "target": "Kuma Uptime" },
// { "source": "DevOps", "target": "Sentry" },
// { "source": "DevOps", "target": "MinIO" },
// { "source": "DevOps", "target": "Grafana" },
// { "source": "DevOps", "target": "Prometheus" },
// { "source": "DevOps", "target": "Traefik" },
// { "source": "DevOps", "target": "Cloudflare" },
// { "source": "DevOps", "target": "Keycloak" },
// { "source": "Operating Systems", "target": "Arch Linux" },
// { "source": "Operating Systems", "target": "Debian" },
// { "source": "Operating Systems", "target": "Ubuntu" },
// { "source": "Databases", "target": "MariaDB" },
// { "source": "Databases", "target": "MySQL" },
// { "source": "Databases", "target": "PostgreSQL" },
// { "source": "Databases", "target": "Redis" },
// { "source": "Messaging Systems", "target": "RabbitMQ" },
// { "source": "API Documentation", "target": "OpenAPI" }
// ]

//
// const option = ref({
// tooltip: {},
// animationDurationUpdate: 1500,
// animationEasingUpdate: 'quinticInOut',
// series: [
// {
// type: 'graph',
// layout: 'none',
// symbolSize: 50,
// roam: true,
// label: {
// show: true,
// },
// edgeSymbolSize: [4, 10],
// edgeLabel: {
// fontSize: 20,
// },
// data,
// links,
// lineStyle: {
// opacity: 0.9,
// width: 2,
// curveness: 0.3,
// },
// },
// ],
// });
const techStack: Tech[] = [
  new Tech(
    "Vue.js",
    "/logos/vue.svg",
    `I'm confident of calling myself an expert in Vue.js, having build dozens of project with it.`
  ),
  new Tech(
    "Nuxt.js",
    "/logos/nuxt.svg",
    "Vue.js + Nuxt.js = ❤️! For extra performance and those SEO needs."
  ),
  new Tech(
    "TypeScript",
    "/logos/typescript.svg",
    "TypeScript in frontend & backend for cutting edge features, Type Safety and the OOP stuff you sometimes want"
  ),
  new Tech(
    "Docker",
    "/logos/docker.png",
    "I use Docker in all of my projects in development and production, for an easy setup and consistent setup across machines."
  ),
  new Tech(
    "Node.js",
    "/logos/nodejs.svg",
    "Node.js + Express.js is my framework of choice for building fast & reliable APIs."
  ),
  new Tech(
    "PHP",
    "/logos/php.svg",
    `I've tons of experience in PHP, from CMS (like Wordpress or Typo3) to writing APIs or maintaining huge backends.`
  ),
  new Tech(
    "Tailwind",
    "/logos/tailwindcss.svg",
    `I love using tailwind in my projects, in fact: This website is also build by it.`
  ),
  new Tech(
    "OpenAPI",
    "/logos/openapi.svg",
    `Want me to write or implement an API? Be happy and get or provide me an OpenAPI file!`
  ),
];
</script>
