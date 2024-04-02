import { createApp } from 'vue'
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppLoader from './components/AppLoader.vue';
import App from './App.vue'

// createApp(App).mount('#app')
const app = createApp(App)
app.component('AppLoader', AppLoader)
app.use(router)
app.mount('#app')
