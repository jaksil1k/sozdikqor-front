import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import InstantSearch from 'vue-instantsearch/vue3/es';

createApp(App).use(store).use(router).use(InstantSearch).mount('#app')
