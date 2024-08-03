<template>
  <graph-chart class="h-[100vh] w-full" :data="data" :links="links" autoresize />
</template>

<script lang="ts" setup>
const data = [
  { "name": "DevOps", "x": 900, "y": 300, "symbolSize": 60 },
  { "name": "Containerization", "x": 600, "y": 200, "symbolSize": 50 },
  { "name": "CI/CD", "x": 600, "y": 400, "symbolSize": 50 },
  { "name": "Version Control", "x": 600, "y": 600, "symbolSize": 50 },
  { "name": "Monitoring and Logging", "x": 1500, "y": 200, "symbolSize": 50 },
  { "name": "Storage and Management", "x": 1500, "y": 400, "symbolSize": 50 },
  { "name": "Networking", "x": 1500, "y": 600, "symbolSize": 50 },
  { "name": "Identity and Access Management", "x": 1500, "y": 800, "symbolSize": 50 },
  { "name": "Messaging Systems", "x": 1000, "y": 500, "symbolSize": 50 },
  { "name": "Docker", "x": 350, "y": 100, "symbolSize": 40 },
  { "name": "Docker Swarm", "x": 500, "y": 0, "symbolSize": 40 },
  { "name": "Drone CI", "x": 350, "y": 300, "symbolSize": 40 },
  { "name": "GitLab CI", "x": 350, "y": 450, "symbolSize": 40 },
  { "name": "Gitea", "x": 350, "y": 650, "symbolSize": 40 },
  { "name": "GitHub", "x": 350, "y": 850, "symbolSize": 40 },
  { "name": "GitLab", "x": 550, "y": 850, "symbolSize": 40 },
  { "name": "Grafana", "x": 1700, "y": 0, "symbolSize": 40 },
  { "name": "Prometheus", "x": 1900, "y": 50, "symbolSize": 40 },
  { "name": "Kuma Uptime", "x": 1900, "y": 200, "symbolSize": 40 },
  { "name": "Sentry", "x": 1750, "y": 250, "symbolSize": 40 },
  { "name": "MinIO", "x": 1900, "y": 450, "symbolSize": 40 },
  { "name": "Traefik", "x": 1900, "y": 600, "symbolSize": 40 },
  { "name": "Cloudflare", "x": 1750, "y": 650, "symbolSize": 40 },
  { "name": "Keycloak", "x": 1900, "y": 850, "symbolSize": 40 },
  { "name": "RabbitMQ", "x": 1000, "y": 750, "symbolSize": 40 }
]


const links = [
  { "source": "DevOps", "target": "Containerization" },
  { "source": "DevOps", "target": "CI/CD" },
  { "source": "DevOps", "target": "Version Control" },
  { "source": "DevOps", "target": "Monitoring and Logging" },
  { "source": "DevOps", "target": "Storage and Management" },
  { "source": "DevOps", "target": "Networking" },
  { "source": "DevOps", "target": "Identity and Access Management" },
  { "source": "DevOps", "target": "Messaging Systems" },
  { "source": "Containerization", "target": "Docker" },
  { "source": "Containerization", "target": "Docker Swarm" },
  { "source": "CI/CD", "target": "Drone CI" },
  { "source": "CI/CD", "target": "GitLab CI" },
  { "source": "Version Control", "target": "Gitea" },
  { "source": "Version Control", "target": "GiHub" },
  { "source": "Version Control", "target": "GitLab" },
  { "source": "Monitoring and Logging", "target": "Grafana" },
  { "source": "Monitoring and Logging", "target": "Prometheus" },
  { "source": "Monitoring and Logging", "target": "Kuma Uptime" },
  { "source": "Monitoring and Logging", "target": "Sentry" },
  { "source": "Storage and Management", "target": "MinIO" },
  { "source": "Networking", "target": "Traefik" },
  { "source": "Networking", "target": "Cloudflare" },
  { "source": "Identity and Access Management", "target": "Keycloak" },
  { "source": "Messaging Systems", "target": "RabbitMQ" }
]


</script>
