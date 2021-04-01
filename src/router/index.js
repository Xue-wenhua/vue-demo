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
    },
    {
      path: '/mockTest',
      name: 'mockTest',
      component: () => import('@/view/mockTest')
    },
    {
      path: '/routerPractice',
      name: 'routerPractice',
      component: () => import('@/view/routerPractice/index')
    },
    {
      path: '/deepCopy',
      name: 'deepCopy',
      component: () => import('@/view/deepCopy/index')
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: () => import('@/view/introduction/index')
    }
  ]
})
