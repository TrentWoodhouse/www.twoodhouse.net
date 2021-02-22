import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from './components/pages/Home';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/projects/Projects";
import Login from "./components/pages/auth/Login";
import Project from "./components/pages/projects/Project";
import ProjectCreate from "./components/pages/projects/ProjectCreate";
import ProjectEdit from "./components/pages/projects/ProjectEdit";

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
    },
    {
        path: '/project/:id',
        name: 'project',
        component: Project,
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
    next();
});
