<template>
  <div ref="modalBackground" @click="checkClose" class="fixed bg-secondary bg-opacity-70 top-0 bottom-0 left-0 right-0 z-40 flex justify-center items-center">
    <div @click="showCopyMail" class="bg-accent-1 text-primary opacity-100 p-16">
      Click here to send me an E-Mail!<br />
      <span v-if="email">My email is: <a :href="`mailto:${email}`">{{ email }}</a></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class ContactModal extends Vue {
  email = ''
  async showCopyMail () {
    await navigator.clipboard.writeText("contact@wug.ge");
    this.email = "contact@wug.ge"
  }

  checkClose(e: MouseEvent) {
    if (e.target === this.$refs.modalBackground) {
      this.$emit('close')
    }
  }
}
</script>