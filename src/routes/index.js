import pageone from '@/components/pageone'
import gallery from '@/components/gallery'
import aboutus from '@/components/aboutus'
import store from '@/components/store'
import checkout from '@/components/checkout'


const routes = {
  props: ['id']
}

export default [
    {path: '/', component: pageone},
    {path: '/gallery', component: gallery},
    {path: '/about_me', component: aboutus},
    {path: '/store/:id', component: store},
    {path: '/checkout', component: checkout}
]
