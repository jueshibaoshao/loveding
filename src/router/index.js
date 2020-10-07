import Vue from 'vue'
import Router from 'vue-router'
import buycar from '@/components/Helloworld'
import buy from '@/components/test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'buycar',
      component: buycar
    },
    {
      path: '/test',
      name: 'buy',
      component: buy
    }
  ]
})
