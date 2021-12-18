<template>
  <div class="bg-secondary text-primary justify-center items-center flex text-center p-3.5">
    <div>
      <h1 class="md:text-6xl text-4xl">My Tech Stack</h1>

      <card v-for="(tech, i) in techStack" :key="i" class="relative flex m-6 justify-center items-center">
        <img class="w-16 left-5 absolute" :src="tech.logo" :alt="tech.name" />
        <div class="text p-6 pl-24">
          {{ tech.description }}
        </div>
      </card>

      <a href="#">see some code ></a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Card from '@/components/Card.vue'

import { Tech } from '@/lib/models/Tech'

@Component({
  components: {
    Card
  }
})
export default class TechStack extends Vue {
  techStack: Tech[] = [
    new Tech('Vue.js', require('@/assets/logos/vue.svg'), `I'm confident of calling myself an expert in Vue.js, having build dozens of project with it.`),
    new Tech('Nuxt.js', require('@/assets/logos/nuxt.svg'), 'Nuxt.js for extra performance and SEO'),
    new Tech('TypeScript', require('@/assets/logos/typescript.svg'), 'TypeScript in frontend & backend for cutting edge features, Type Safety and the OOP stuff you want sometimes'),
    new Tech('Docker', require('@/assets/logos/docker.png'), 'Docker in development and in production, for easy consistent setup'),
    new Tech('Node.js', require('@/assets/logos/nodejs.svg'), 'Node.js is my framework of choice for building fast & reliable APIs'),
    new Tech('PHP', require('@/assets/logos/php.svg'), `I've tons of experience in PHP, in combination with CMS (like Wordpress or Typo3) and in writing APIs`)

  ]

}
</script>