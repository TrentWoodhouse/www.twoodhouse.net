import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export const store = new Vuex.Store({
    state: {
        auth: localStorage.getItem('auth'),
        user: null,
        projects: null,
    },
    getters: {
        auth(state) {
            return JSON.parse(state.auth);
        },
        projects(state) {
            return state.projects;
        }
    },
    mutations: {
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
