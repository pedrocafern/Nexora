import vuetify from 'vite-plugin-vuetify'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(vuetify())
app.use(router)
app.mount('#app')
