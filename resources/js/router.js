import Vue from 'vue';
import VueRouter from 'vue-router';
import {verify, getRedirect} from "./guard";

Vue.use(VueRouter);

import Home from './components/pages/Home';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/projects/Projects";
import Login from "./components/pages/auth/Login";
import Project from "./components/pages/projects/Project";
import ProjectCreate from "./components/pages/projects/ProjectCreate";
import ProjectEdit from "./components/pages/projects/ProjectEdit";
import ProjectDelete from "./components/pages/projects/ProjectDelete";

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
        path: '/projects',
        name: 'projects',
        component: Projects,
    },
    {
        path: '/project/create',
        name: 'project-create',
        component: ProjectCreate,
    },
    {
        path: '/project/:id/edit',
        name: 'project-edit',
        component: ProjectEdit,
        meta: {
            guards: [
                'auth',
                {
                    type: 'exists',
                    options: {
                        object: 'projects',
                        redirect: {name: 'projects'}
                    }
                }
            ]
        }
    },
    {
        path: '/project/:id',
        name: 'project',
        component: Project,
        meta: {
            guards: [
                {
                    type: 'exists',
                    options: {
                        object: 'projects',
                        redirect: {name: 'projects'}
                    }
                }
            ]
        }
    },
    {
        path: '/project/:id/delete',
        name: 'project-delete',
        component: ProjectDelete,
        meta: {
            guards: [
                'auth',
                {
                    type: 'exists',
                    options: {
                        object: 'projects',
                        redirect: {name: 'projects'}
                    }
                }
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
                next(getRedirect(guard));
                return;
            }
        }
    }
    next();
});
