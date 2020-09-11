import './lib/hhw.scss'
import './index.scss'
import {createApp} from 'vue'
// @ts-ignore
import App from './App.vue'
// @ts-ignore
import router from './router/index.ts'

const app = createApp(App)
app.use(router)
app.mount('#app')
