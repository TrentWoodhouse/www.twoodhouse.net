import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export const store = new Vuex.Store({
    state: {
        title: '',
        image: '',
        auth: localStorage.getItem('auth'),
        projects: null,
    },
    getters: {
        title(state) {
            return state.title;
        },
        image(state) {
            return state.image;
        },
        auth(state) {
            return JSON.parse(state.auth);
        },
        projects(state) {
            return state.projects;
        }
    },
    mutations: {
        setTitle(state, title) {
            state.title = title;
        },
        setImage(state, image) {
            state.image = image;
        },
        setAuth(state, auth) {
            state.auth = JSON.stringify(auth);
            localStorage.setItem('auth', JSON.stringify(auth));
        },
        clearAuth(state) {
            state.auth = null;
            localStorage.removeItem('auth');
        },
        setProjects(state, data) {
            state.projects = data;
        }
    },
    actions: {
        login(context, data) {
            return axios.post('/api/login', data)
            .then(response => {
                context.commit('setAuth', response.data);
            });
        },
        logout(context) {
            context.commit('clearAuth');
        },
        getProjects(context) {
            return axios.get('/api/project')
            .then(response => {
                context.commit('setProjects', response.data);
            });
        },
    }

});
