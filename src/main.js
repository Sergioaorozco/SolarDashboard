import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Styles
import './style.scss'
import "primevue/resources/themes/lara-light-indigo/theme.css";     
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";


// Primevue Components
import Tooltip from 'primevue/tooltip';


const pinia = createPinia();
const vue = createApp(App);
vue
.directive('tooltip', Tooltip)
.use(pinia)
.use(router)
.mount('#app');


