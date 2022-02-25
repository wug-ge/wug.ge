<template>
    <div class="text-primary logo-container flex items-center align-middle border p-1">
        <div class="text">
          {{ `[</>]` }}
        </div>
        <div class="text ml-1">
          Wugge
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {}
})
export default class Logo extends Vue {

}
</script>