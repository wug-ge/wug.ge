<template>
  <div class="bg-accent-2 text-primary justify-center items-center flex text-center p-3.5">
    <div>
      <h1 class="md:text-5xl text-3xl">My Tech Stack</h1>
      <br />
      <div class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <card v-for="(tech, i) in techStack" :key="i" class="relative text-center">
          <img class="w-20 mx-auto bg-primary p-4 rounded" :src="tech.logo" :alt="tech.name" />
          <div class="text p-6">
            {{ tech.description }}
          </div>
        </card>
      </div>
      <br />
      <a class="text-xl" href="https://github.com/wug-ge">see some code ></a>
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
    new Tech('Nuxt.js', require('@/assets/logos/nuxt.svg'), 'Vue.js + Nuxt.js = ❤️! For extra performance and those SEO needs.'),
    new Tech('TypeScript', require('@/assets/logos/typescript.svg'), 'TypeScript in frontend & backend for cutting edge features, Type Safety and the OOP stuff you sometimes want'),
    new Tech('Docker', require('@/assets/logos/docker.png'), 'I use Docker in all of my projects in development and production, for an easy setup and consistent setup across machines.'),
    new Tech('Node.js', require('@/assets/logos/nodejs.svg'), 'Node.js + Express.js is my framework of choice for building fast & reliable APIs.'),
    new Tech('PHP', require('@/assets/logos/php.svg'), `I've tons of experience in PHP, from CMS (like Wordpress or Typo3) to writing APIs or maintaining huge backends.`),
    new Tech('Tailwind', require('@/assets/logos/tailwindcss.svg'), `I love using tailwind in my projects, in fact: This website is also build by it.`),
    new Tech('OpenAPI', require('@/assets/logos/openapi.svg'), `Want me to write or implement an API? Be happy and get or provide me an OpenAPI file!`)
  ]

}
</script>