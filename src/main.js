import { createApp } from 'vue';
import vueConfig from '../vue.config';
import './style.css'
import App from './App.vue'

vueConfig.devtools = true;
// createApp(App).mount('#app');
const app = createApp(App);
app.mount('#app');
app.config.devtools = true;