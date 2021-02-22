import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

axios.defaults.baseURL = '/api';

export const store = new Vuex.Store({
    state: {
        auth: localStorage.getItem('auth'),
        projects: null,
    },
    getters: {
        auth(state) {
            return JSON.parse(state.auth) || null;
        },
        projects(state) {
            return state.projects;
        },
        _config(state, getters) {
            return (_headers) => ({
                headers: {
                    Authorization: `Bearer ${getters.auth?.token}`,
                    Accept: 'application/json',
                    ..._headers,
                }
            });
        },
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
            return axios.post('/login', data)
            .then(response => {
                context.commit('setAuth', response.data);
            });
        },
        logout(context) {
            context.commit('clearAuth');
        },
        getProjects(context) {
            return axios.get('/project')
            .then(response => {
                context.commit('setProjects', response.data);
            });
        },
        createProject(context, data) {
            return axios.post('/project', data, context.getters._config())
                .then(response => {
                    context.dispatch('getProjects');
                })
                .catch(error => console.log(error.message));
        },
        updateProject(context, {id, data}) {
            return axios.post(`/project/${id}`, data, context.getters._config())
                .then(response => {
                    console.log(response);
                    context.dispatch('getProjects');
                })
                .catch(error => console.log(error.message));
        },
        imageUpload(context, data) {
            return axios.post('/image-upload', data, context.getters._config({'Content-Type': 'multipart/form-data'}));
        }
    }
});
