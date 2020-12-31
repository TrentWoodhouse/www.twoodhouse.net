import Vue from 'vue';
import Vuelidate from 'vuelidate';
import VueEditor from "vue2-editor";
import VueRx from 'vue-rx';
import VuejsClipper from 'vuejs-clipper/dist/vuejs-clipper.umd';
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import {router} from './router';
import {store} from './store';

Vue.use(Vuelidate);
Vue.use(VueEditor);
Vue.use(VueRx);
Vue.use(VuejsClipper);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

import App from './components/App';
const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});
