<template>
    <graph-chart class="w-full" :data="data" :links="links" autoresize />
</template>

<script lang="ts" setup>
const data = [
  { "name": "Frontend", "x": 500, "y": 200, "symbolSize": 60 },
  { "name": "Frameworks and Libraries", "x": 300, "y": 200, "symbolSize": 50 },
  { "name": "Styling", "x": 700, "y": 200, "symbolSize": 50 },
  { "name": "Vue.js", "x": 100, "y": 200, "symbolSize": 40 },
  { "name": "Nuxt", "x": 150, "y": 100, "symbolSize": 40 },
  { "name": "Tailwind CSS", "x": 850, "y": 200, "symbolSize": 40 },
  { "name": "SCSS", "x": 850, "y": 100, "symbolSize": 40 }
]

const links = [
  { "source": "Frontend", "target": "Frameworks and Libraries" },
  { "source": "Frontend", "target": "Styling" },
  { "source": "Frameworks and Libraries", "target": "Vue.js" },
  { "source": "Frameworks and Libraries", "target": "Nuxt" },
  { "source": "Styling", "target": "Tailwind CSS" },
  { "source": "Styling", "target": "SCSS" }
]
</script>
