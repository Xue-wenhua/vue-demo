import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import fuzzySearch from '@/view/fuzzySearch'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/fuzzySearch',
      name: 'fuzzySearch',
      component: fuzzySearch
    }
  ]
})
