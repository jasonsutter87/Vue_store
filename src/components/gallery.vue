<template >
  <section>
    <div class="container-1600">
      <div class="row">
        <div class="col-12">
            <h2 class="text-center">Gallery</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 col-md-4 offset-md-1 col-lg-4 offset-lg-0" v-for="product in products">
          <a :href="product.url">
            <div class="gallery-image-size">
              <div class="gallery-image"
                :style=updateProduct(product.image)>
            </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
   export default {
     data(){
       return {
          range: 10,
          number: 1,
          url: '',
          products: [
            {
                id: 1,
                title: 'kdjhfkjhds',
                image: 'https://picsum.photos/id/'+1+'/425/650',
                url: '/#/store/'+ 1,
                desription: 'jkhfkjsd'
            },
            {
                id: 2,
                title: 'kdjhfkjhds',
                image: 'https://picsum.photos/id/'+2+'/425/650',
                url: '/#/store/'+ 2,
                desription: 'jkhfkjsd'
            },
            {
                id: 3,
                title: 'kdjhfkjhds',
                image: 'https://picsum.photos/id/'+3+'/425/650',
                url: '/#/store/'+ 3,
                desription: 'jkhfkjsd'
            }
          ]
       }
     },
     methods: {
        updateProduct: function(url) {
            this.url = url
            return 'background-image: url('+this.url+')';
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
