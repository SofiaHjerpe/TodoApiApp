import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodosView from '@/views/TodosView.vue'
import SingleTodoView from '../views/SingleTodoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todos',
    name: 'todos',
    component: TodosView
  },
  {
    path: '/todo/:id',
    name: 'todo',
    component: SingleTodoView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
