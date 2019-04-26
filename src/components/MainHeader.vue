<template >
  <header class="header-section">
    <div class="container-1600">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center">
            <span class="firstname">jason</span><br>
            <span class="lastname">Sutter</span>
          </h1>
        </div>
      </div>

      <div class="row justify-space-between justify-content-center">
        <div v-for="link in links"
             class="col-2">
             <p class="text-center">
               <a :href="link.linkAnchor">{{ link.linkText }}</a>
             </p>
        </div>
      </div>

    </div>
  </header>
</template>

<script>
  export default {
    data(){
      return {
        links: [
        {
          linkText: 'home',
          linkAnchor: '/#/'
        },
        {
          linkText: 'gallery',
          linkAnchor: '/#/pageTwo'
        },
        {
          linkText: 'about us',
          linkAnchor: '/#/about_us'
        }
        ]
      }
    }
  }
</script>

<style scoped>
  .firstname{
    font-family: 'Lato', sans-serif;
    font-size: 4rem;
    font-weight: 300;
  }
  .lastname{
    font-family: 'Lato', sans-serif;
    font-size: 6rem;
    line-height: .5;
    font-weight: 300;
    text-transform: uppercase;
  }
</style>
