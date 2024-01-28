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
        posts: null,

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
        loaded(state) {
            return !!state.posts;
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
        addPost(state, post) {
            state.posts.push(post);
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
        updatePost(state, post) {
            let oldPost = state.posts.find(p => p.id === post.id);
            Object.assign(oldPost, post);
        },
        removePost(state, id) {
            state.posts = state.posts.filter(p => p.id !== id);
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
        getPosts(context) {
            return axios.get('/post')
            .then(response => {
                context.commit('setObject', {
                    object: 'posts',
                    data: response.data
                });
                return response;
            });
        },
        createPost(context, data) {
            return axios.post('/post', data, context.getters._config())
                .then(response => {
                    console.log(response.data);
                    context.commit('addPost', response.data);
                    return response;
                })
                .catch(error => console.log(error.message));
        },
        updatePost(context, {id, data}) {
            return axios.put(`/post/${id}`, data, context.getters._config())
                .then(response => {
                    context.commit('updatePost', response.data);
                    return response;
                })
                .catch(error => console.log(error.message));
        },
        deletePost(context, id) {
            return axios.delete(`/post/${id}`, context.getters._config())
                .then(response => {
                    context.commit('removePost', id);
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
