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
        images: {},
        projects: null,

        //Page objects
        image: null,
        title: null,
        actions: [],
        alerts: [],
    },
    getters: {
        auth(state) {
            return JSON.parse(state.auth) || null;
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
        addAlert(state, alert) {
            alert.scope = alert.scope || 'app';
            state.alerts.push(alert);
        },
        removeAlert(state, scope) {
            state.alerts = state.alerts.filter(a => a.scope !== scope);
        },
        updateAppAlert(state) {
            state.alerts = state.alerts.filter(a => !a.immediate || a.scope !== 'app');
            state.alerts.forEach(a => {
                if(a.scope === 'app') {
                    a.immediate = true;
                }
            });
        },
        setObject(state, {object, data}) {
            state[object] = data;
        },
        addProject(state, project) {
            state.projects.push(project);
        },
        saveImage(state, {path, callback}) {
            if(!state.images[path]) {
                let image = new Image();
                state.images[path] = image;
                image.src = path;
                image.onload = () => callback(path);
            }
            else {
                callback(path);
            }
        },
        updateProject(state, project) {
            let oldProject = state.projects.find(p => p.id === project.id);
            Object.assign(oldProject, project);
        },
        removeProject(state, id) {
            state.projects = state.projects.filter(p => p.id !== id);
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
                context.commit('setObject', {
                    object: 'projects',
                    data: response.data
                });
                return response;
            });
        },
        createProject(context, data) {
            return axios.post('/project', data, context.getters._config())
                .then(response => {
                    context.commit('addProject', response.data);
                    return response;
                })
                .catch(error => console.log(error.message));
        },
        updateProject(context, {id, data}) {
            return axios.put(`/project/${id}`, data, context.getters._config())
                .then(response => {
                    context.commit('updateProject', response.data);
                    return response;
                })
                .catch(error => console.log(error.message));
        },
        deleteProject(context, id) {
            return axios.delete(`/project/${id}`, context.getters._config())
                .then(response => {
                    context.commit('removeProject', id);
                    return response;
                })
                .catch(error => console.log(error.message));
        },
        imageUpload(context, data) {
            return axios.post('/image-upload', data, context.getters._config({'Content-Type': 'multipart/form-data'}));
        },
        sendContactMail(context, data) {
            return axios.post('/contact', data, context.getters._config());
        }
    }
});
