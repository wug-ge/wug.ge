<template>
    <nav class="bg-primary border-b flex items-center justify-between flex-wrap bg-teal p-6 text-secondary">
      <div class="flex items-center flex-no-shrink mr-6">
        <nuxt-link to="/">
          <logo></logo>
        </nuxt-link>
      </div>
      <div class="block md:hidden">
        <button
          @click="showResponsiveMenu = !showResponsiveMenu"
          class="
            flex
            items-center
            px-3
            py-2
            border
            text-teal-lighter
            border-teal-light
            hover:text-white hover:border-white
          "
        >
          <svg
            class="h-3 w-3 stroke-current fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div v-if="showResponsiveMenu || isMedium" class="w-full block flex-grow md:flex md:items-center md:w-auto">
        <div class="text-sm md:flex-grow">
          <a
            href="#responsive-header"
            class="
              block
              mt-4
              md:inline-block md:mt-0
              text-teal-lighter
              hover:text-white
              mr-4
            "
          >
            Tech showcase
          </a>
          <a
            href="#responsive-header"
            class="
              block
              mt-4
              md:inline-block md:mt-0
              text-teal-lighter
              hover:text-white
              mr-4
            "
          >
            Projects
          </a>
          <a
            href="#responsive-header"
            class="
              block
              mt-4
              md:inline-block md:mt-0
              text-teal-lighter
              hover:text-white
              mr-4
            "
          >
            About me
          </a>
          <nuxt-link
            to="/blog"
            href=""
            class="
              block
              mt-4
              md:inline-block md:mt-0
              text-teal-lighter
              hover:text-white
            "
          >
            Blog
          </nuxt-link>
        </div>
        <div>
          <a
            href="#"
            class="
              inline-block
              text-sm
              px-4
              py-2
              leading-none
              border
              rounded
              text-white
              border-white
              hover:border-transparent hover:text-teal hover:bg-white
              mt-4
              md:mt-0
            "
            >Contact</a
          >
        </div>
      </div>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Logo from '@/components/Logo.vue'

@Component({
  components: {
    Logo
  }
})
export default class Navigation extends Vue {
  showResponsiveMenu = false
  isMedium = true

  mounted () {
    if (process.client) {
      window.addEventListener('resize', this.checkIsWindowMedium)
      this.checkIsWindowMedium()
    }
  }

  checkIsWindowMedium() {
    this.isMedium = window.outerWidth >= 768
  }
  
}
</script>