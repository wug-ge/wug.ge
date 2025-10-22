<template>
  <footer class="text-accent-1 p-10 flex items-center">
    <div class="imprint">
      <h1 class="md:text-2xl text-xl">Imprint</h1>
      Ing. Daniel Wuggenig<br>
      Gnoppnitz 7<br>
      9761 Greifenburg<br>
      wug.ge<br>
      <button @click="emailClick">{{email ? '' : 'Show' }} E-Mail</button>{{email ? ': ' + email : ''}}
      <br><br>
      <a href="/privacy-policy">Privacy Policy</a><br>

    </div>
    <div class="social-media rounded-l-lg bg-accent-1 absolute right-0 p-10">
      <a class="w-10" href="https://github.com/wug-ge">
        <img class="w-14 bg-primary p-2 rounded-lg" src="/logos/github.svg" alt="Github" /> 
      </a>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const email = ref('')

/**
 * Little bit of very professional protection against crawlers
 */
const emailClick = () => {
    email.value = `imprint` + `@` + `wug.ge`
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