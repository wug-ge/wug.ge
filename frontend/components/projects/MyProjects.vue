<template>
  <div class="bg-accent-2 text-primary justify-center items-center flex text-center p-3.5">
    <div>
      <h1 class="md:text-5xl text-3xl">My Projects</h1>
      <br />
      <div class="projects container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <card class="project">
          <div class="picture-wrapper">
            <img src="@/assets/img/website.png" alt="Picture of website" />
          </div>
          <div class="text">
            This website is open source! It's build using Nuxt.js, TypeScript, Tailwind CSS and Docker!
            I use Drone CI for deployment as mentioned <nuxt-link to="/blog/drone-ci-nuxt-docker-compose">here</nuxt-link>
            Go check it out on <a href="https://github.com/wug-ge/wug.ge">Github!</a>
          </div>
        </card>

        <card class="project">
          <div class="picture-wrapper">
            <img src="/logos/docker.png" alt="Docker logo" />
          </div>
          <div class="text">
            Docker LAMP skeleton project for absolute beginners as an alternative for shittier LAMP setups as mentioned in the blogpost <nuxt-link to="/blog/docker-php-dev-tutorial">here</nuxt-link>.
            Got check it out on <a href="https://github.com/wug-ge/php-apache-mariadb-project-base">Github!</a>
          </div>
        </card>

        <card class="project">
          <div class="picture-wrapper text p-6 mx-auto text-xl">
            More to come...
          </div>
          <div class="text">
            Sadly I can't provide you with too many code examples by now. But feel free to contact me and ask me about it!
            I don't bite and am happy to talk with you!
          </div>
        </card>        
      </div>
      <br />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  .project {
    @apply relative text-center rounded;
    .picture-wrapper {
      min-height: 128px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        @apply w-32 mx-auto bg-primary p-2 rounded;
      }
    }
    .text {
      @apply p-6;
    }
    a {
      @apply text-accent-2 underline; 
    }
  }
}
</style>