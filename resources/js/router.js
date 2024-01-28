import Vue from 'vue';
import VueRouter from 'vue-router';
import {verify, getRedirect} from "./guard";

Vue.use(VueRouter);

import Home from './components/pages/Home';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Posts from "./components/pages/post/Posts";
import Login from "./components/pages/auth/Login";
import Post from "./components/pages/post/Post";
import PostCreate from "./components/pages/post/PostCreate";
import PostEdit from "./components/pages/post/PostEdit";
import PostDelete from "./components/pages/post/PostDelete";

import {store} from "./store";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
        path: '/post/:type',
        name: 'posts',
        component: Posts,
        meta: {
            guards: [
                'path-exists',
            ]
        }
    },
    {
        path: '/post/:type/create',
        name: 'post-create',
        component: PostCreate,
        meta: {
            guards: [
                'auth',
                'path-exists',
            ]
        }
    },
    {
        path: '/post/:type/:id/edit',
        name: 'post-edit',
        component: PostEdit,
        meta: {
            guards: [
                'auth',
                'path-exists',
                'exists',
            ]
        }
    },
    {
        path: '/post/:type/:id',
        name: 'post',
        component: Post,
        meta: {
            guards: [
                'path-exists',
                'exists',
            ]
        }
    },
    {
        path: '/post/:type/:id/delete',
        name: 'post-delete',
        component: PostDelete,
        meta: {
            guards: [
                'auth',
                'path-exists',
                'exists',
            ]
        }
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            guards: ['guest']
        }
    },
    {
        path: '*',
        redirect: { name: 'home' }
    }
];

export const router = new VueRouter({
    mode: 'history',
    routes,
});

router.beforeEach((to, from, next) => {
    if(to.meta?.guards) {
        for(let guard of to.meta.guards) {
            if(!verify(to, guard)) {
                next(getRedirect(to, guard));
                return;
            }
        }
    }
    store.commit('updateAppAlert');
    next();
});
