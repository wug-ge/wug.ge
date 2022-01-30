<template>
  <div class="bg-accent-2 text-primary justify-center items-center flex text-center p-3.5">
    <div>
      <h1 class="md:text-5xl text-3xl">My Projects</h1>
      <br />
      <div class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <card class="relative text-center">
          <img class="w-32 mx-auto bg-primary p-2 rounded" src="@/assets/img/website.png" alt="Picture of website" />
          <div class="text p-6">
            This website is open source! It's build using Nuxt.js, TypeScript, Tailwind CSS and Docker! Go check it out on <a href="https://github.com/wug-ge/wug.ge">Github!</a>
          </div>
        </card>

        <card class="relative text-center">
          <div class="text p-6 mx-auto text-xl">
            More to come...
          </div>
          <div>
            Sadly I can't provide you with too many code examples by now. But feel free to contact me and ask me about it!
            I don't bite and am happy to talk with you!
          </div>
        </card>        
      </div>
      <br />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Card from '@/components/Card.vue'

@Component({
  components: {
    Card
  }
})
export default class MyProjects extends Vue {

}
</script>