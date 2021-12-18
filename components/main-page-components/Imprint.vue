<template>
  <div class="bg-primary text-secondary text-center p-10">
    <h1 class="md:text-2xl text-xl">Imprint</h1>
    Daniel Wuggenig<br>
    Gnoppnitz 7<br>
    9761 Greifenburg<br>
    wug.ge<br>
    <button @click="emailClick">{{email ? '' : 'Show' }} E-Mail</button>{{email ? ': ' + email : ''}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Imprint extends Vue {
  email = ''

  /**
   * Little bit of very professional protection against crawlers
   */
  emailClick() {
    this.email = `imprint` + `@` + `wug.ge`
  }
}
</script>