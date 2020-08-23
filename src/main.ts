import {createApp} from 'vue'
// @ts-ignore
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
// @ts-ignore
import HelloWorld from './components/HelloWorld.vue'
// @ts-ignore
import Router1 from './components/xxx.vue'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {path: '/', component: HelloWorld},
    {path: '/xxx', component: Router1},
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
