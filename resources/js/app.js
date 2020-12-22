import Vue from 'vue';
import Vuelidate from 'vuelidate';
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import {router} from './router';
import {store} from './store';

Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

import App from './components/App';
const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});
