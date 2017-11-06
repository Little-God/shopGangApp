import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/has',
      name: 'Header',
      scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
          return {
            selector: to.hash
          }
        }
      }
    }
  ]
})
