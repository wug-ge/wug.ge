<template>
  <graph-chart class="h-[100vh] w-full" :data="data" :links="links" autoresize />
</template>

<script lang="ts" setup>
const data = [
  { "name": "Databases", "x": 200, "y": 200, "symbolSize": 60 },
  { "name": "MariaDB", "x": 0, "y": 200, "symbolSize": 40 },
  { "name": "MySQL", "x": 50, "y": 100, "symbolSize": 40 },
  { "name": "PostgreSQL", "x": 0, "y": 300, "symbolSize": 40 },
  { "name": "Redis", "x": 50, "y": 400, "symbolSize": 40 }
]

const links = [
  { "source": "Databases", "target": "MariaDB" },
  { "source": "Databases", "target": "MySQL" },
  { "source": "Databases", "target": "PostgreSQL" },
  { "source": "Databases", "target": "Redis" }
]
</script>
