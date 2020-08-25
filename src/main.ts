import {createApp} from 'vue'
// @ts-ignore
import App from './App.vue'
import './index.scss'
// @ts-ignore
import router from './router/index.ts'

const app = createApp(App)
app.use(router)
app.mount('#app')
