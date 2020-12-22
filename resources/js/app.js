import Vue from 'vue';
import Vuelidate from 'vuelidate';
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import {router} from './router';

Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons)

import App from './components/App';

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App),
});
