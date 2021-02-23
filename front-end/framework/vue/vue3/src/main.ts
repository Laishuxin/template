import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import plugins
import Vant from 'vant'

// end import plugins

// import css
import 'vant/lib/index.css'
import '@/assets/scss/main.scss'
// end import css

createApp(App)
  .use(Vant)
  .use(store)
  .use(router)
  .mount('#app')
