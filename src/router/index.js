import { createRouter, createWebHistory } from 'vue-router'

const RegisterForm = () => import('../pages/register/index.vue')
const LoginForm = () => import('../pages/login/index.vue')

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginForm
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterForm
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
