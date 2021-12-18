<template>
  <div class="bg-primary text-secondary p-3.5">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Card extends Vue {

}
</script>