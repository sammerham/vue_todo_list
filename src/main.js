import { createApp } from 'vue';
import "@azaleahealth/azalea-kit-ui/dist/themes/light.css";
import './style.css';
import App from './App.vue';
import router from './router';

createApp(App)
    .use(router)
    .mount('#app');

