<template>
  <footer class="bg-primary text-secondary p-10 flex items-center">
    <div class="imprint">
      <h1 class="md:text-2xl text-xl">Imprint</h1>
      Ing. Daniel Wuggenig<br>
      Gnoppnitz 7<br>
      9761 Greifenburg<br>
      wug.ge<br>
      <button @click="emailClick">{{email ? '' : 'Show' }} E-Mail</button>{{email ? ': ' + email : ''}}
    </div>
    <div class="social-media text-primary bg-secondary absolute right-0 p-10">
      <a class="w-10" href="https://github.com/wug-ge">
        <img class="w-10" :src="require('@/assets/logos/github.svg')" alt="Github" /> 
      </a>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class PageFooter extends Vue {
  email = ''

  /**
   * Little bit of very professional protection against crawlers
   */
  emailClick() {
    this.email = `imprint` + `@` + `wug.ge`
  }
}
</script>

<style lang="scss" scoped>
/*footer {
  .social-media {
    a {
      width: 25px;
    }
  }
}*/
</style>