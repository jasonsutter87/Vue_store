import Vue from 'vue'
import App from './App'
import routes from './routes/index'
import vueRouter from 'vue-router'


Vue.config.productionTip = false

Vue.use(vueRouter)

/****************************************/
/********** Router START here **********/
/**************************************/
const router = new vueRouter({
  routes: routes
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
