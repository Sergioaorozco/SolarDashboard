import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import "primevue/resources/themes/lara-light-indigo/theme.css";     
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";


createApp(App)
.use(router)
.mount('#app')



