<template >
  <section>
    <div class="container-1600">
      <div class="row">
        <div class="col-12">
            <h2 class="text-center">Gallery</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 col-md-4 offset-md-1 col-lg-4 offset-lg-0" v-for="index in number">
          <div class="gallery-image-size">
            <div class="gallery-image"
              :style="updateProduct(index)"
              @click="goToProduct(index)"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
   export default {
     data(){
       return {
          number: 100
       }
     },
     methods: {
        updateProduct: function(number) {
            this.number = number;
          return 'background-image: url(https://picsum.photos/id/'+this.number+'/425/650)'
        },
        goToProduct: function(number) {
          return console.log(number)
        }
    }
   }
</script>

<style scoped>

.gallery-image-size{
  margin: 0 auto;
  width: 100%;
}
.gallery-image{
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-bottom: 100%;
  width: 100%;
  margin-top: 1.5rem;
  }

</style>
