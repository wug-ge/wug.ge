<template>
  <graph-chart class="w-full" :data="data" :links="links" autoresize />
</template>

<script lang="ts" setup>
const data = [
  { "name": "Backend", "x": 500, "y": 150, "symbolSize": 60 },
  { "name": "Node.js Ecosystem", "x": 300, "y": 150, "symbolSize": 50 },
  { "name": "Languages and APIs", "x": 700, "y": 150, "symbolSize": 50 },
  { "name": "Node.js", "x": 0, "y": 100, "symbolSize": 40 },
  { "name": "Express.js", "x": 100, "y": 0, "symbolSize": 40 },
  { "name": "NestJS", "x": 0, "y": 200, "symbolSize": 40 },
  { "name": "Socket.IO", "x": 100, "y": 300, "symbolSize": 40 },
  { "name": "TypeORM", "x": 250, "y": 300, "symbolSize": 40 },
  { "name": "Prisma.js", "x": 350, "y": 300, "symbolSize": 40 },
  { "name": "PHP", "x": 900, "y": 200, "symbolSize": 30 },
  { "name": "TypeScript", "x": 850, "y": 100, "symbolSize": 40 },
  { "name": "OpenAPI", "x": 850, "y": 300, "symbolSize": 40 }
]

const links = [
  { "source": "Backend", "target": "Node.js Ecosystem" },
  { "source": "Backend", "target": "Languages and APIs" },
  { "source": "Node.js Ecosystem", "target": "Node.js" },
  { "source": "Node.js Ecosystem", "target": "Express.js" },
  { "source": "Node.js Ecosystem", "target": "NestJS" },
  { "source": "Node.js Ecosystem", "target": "Socket.IO" },
  { "source": "Node.js Ecosystem", "target": "TypeORM" },
  { "source": "Node.js Ecosystem", "target": "Prisma.js" },
  { "source": "Languages and APIs", "target": "PHP" },
  { "source": "Languages and APIs", "target": "TypeScript" },
  { "source": "Languages and APIs", "target": "OpenAPI" }
]
</script>
