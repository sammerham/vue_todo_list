import { createApp } from "vue";
import { createPinia } from "pinia";
import "@azaleahealth/azalea-kit-ui/dist/themes/light.css";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import Rainbow from "./directives/rainbow";
import Theme from "./directives/theme";
// import Size from './directives/size';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.directive("rainbow", Rainbow);
app.directive("theme", Theme);
// app.directive('size', Size);
app.mount("#app");

