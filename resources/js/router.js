import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from './components/pages/Home';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/projects/Projects";
import Login from "./components/pages/auth/Login";
import Project from "./components/pages/projects/Project";

import {store} from './store';
import ProjectCreate from "./components/pages/projects/ProjectCreate";

function grabImage(img) {
    let ret = new Image();
    ret.src = '/images/' + img;
    return ret;
}

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: 'Trent Woodhouse - Coding & Design',
            image: grabImage('home.png'),
        }
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
            title: 'Get to Know Me',
            image: grabImage('about.png'),
        }
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects,
        meta: {
            title: 'My Projects',
            image: grabImage('projects.png'),
        }
    },
    {
        path: '/project/create',
        name: 'project-create',
        component: ProjectCreate,
        meta: {
            title: 'New Project',
            image: grabImage('projects.png'),
        }
    },
    {
        path: '/project/:id',
        name: 'project',
        component: Project,
        meta: {
            title: 'My Projects',
            imageFrom: 'projects',
        }
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
        meta: {
            title: 'Contact Me',
            image: grabImage('contact.png'),
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: 'Login',
            image: grabImage('login.png'),
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
    if(to.meta?.imageFrom) {
        let entity = store.getters[to.meta.imageFrom]?.find(e => e.id === to.params.id);
        store.commit('setImage', entity?.image);
    }
    else {
        store.commit('setImage', to.meta?.image.src);
    }
    store.commit('setTitle', to.meta?.title);

    next();
});

router.b
