<template >
  <section>
    <div class="container-1600">
      <div class="row">
          <div class="col-12">
            <h2 class="text-center">Checkout</h2>
          </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="checkout-content">
            <ul class="ul-reset">
              <li v-for="item in cart" class="product-item">
                <div class="row">
                  <div class="col-3">
                    <div class="product-item-image-size">
                      <img :src="item.image" alt="" class="product-image">
                    </div>
                  </div>
                  <div class="col">
                    <h3>{{ item.title }}</h3>
                    <p>${{ item.price }}</p>
                  </div>
                </div>
              </li>
            </ul>
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
         cart: []
       }
     },
     props: {
       cart:{
         type: Array,
         required: true
       }
     }
   }
</script>

<style scoped>
  .checkout-content{
    padding: 3rem 0;
  }

  .product-item{
    margin: 3rem 0;
    padding: 3rem 0;
    border: 2px solid black;
  }

  .product-item-image-size{
    margin: 0 auto;
    width: 25%;
  }

  .product-image{
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    margin-top: 1.5rem;
    box-shadow: 0px 9px 37px 2px rgba(0,0,0,0.75);
  }
</style>
