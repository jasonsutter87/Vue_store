<template >
  <section>
    <div class="container-1600">
      <div class="row">
        <div class="col-12">
            <h2 class="text-center">Store</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 col-md-4 offset-md-1 col-lg-4 offset-lg-\0">
          <div class="gallery-image-size">
            <div class="gallery-image"
              :style="updateProduct()"
            ></div>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-4">
          <p>Lorem ipsum dolor amet cred hexagon pour-over palo santo schlitz normcore direct trade vexillologist typewriter microdosing bushwick. Church-key art party stumptown banjo flannel snackwave. Slow-carb craft beer cray shaman 90's, try-hard lo-fi VHS banh mi hexagon brooklyn copper mug. Pinterest migas poutine, photo booth vegan blue bottle franzen etsy snackwave four dollar toast plaid. Ugh austin sustainable PBR&B unicorn. Celiac leggings sustainable iPhone flexitarian pinterest.</p>
          <p>Pug hot chicken seitan readymade normcore williamsburg listicle locavore godard la croix man braid affogato cloud bread pork belly craft beer. Cronut ramps fashion axe live-edge. Literally chambray polaroid four dollar toast. Offal raclette lo-fi prism ugh ennui hoodie hella glossier. Unicorn cornhole gentrify chillwave intelligentsia kombucha retro art party man bun asymmetrical trust fund paleo shoreditch activated charcoal scenester.</p>
          <p>3 wolf moon tousled butcher, gentrify shoreditch offal cred cardigan coloring book cold-pressed hoodie. DIY PBR&B narwhal occupy sustainable typewriter la croix church-key kinfolk jianbing godard pickled tumeric. Etsy plaid lyft, banjo tumeric cronut ennui gastropub truffaut 3 wolf moon kombucha mumblecore art party. Microdosing four dollar toast vinyl, tattooed adaptogen tilde gastropub hammock chartreuse fashion axe fam. Swag freegan microdosing deep v man braid before they sold out slow-carb unicorn sartorial umami lomo subway tile tilde cardigan.</p>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
  export default {
    data(){
      return {
         number: 0,
         selectedProduct: this.$route.path.split('/')[2],
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
       updateProduct: function() {
         return 'background-image: url('+this.products[this.selectedProduct -1 ].image+')'
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
