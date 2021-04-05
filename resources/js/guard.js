import {store} from './store';
import config from "./config";

const guards = [
    {
        type: 'auth',
        redirect: {name: 'home'},
    },
    {
        type: 'guest',
        redirect: {name: 'home'},
    },
    {
        type: 'exists',
        redirect(route) {
            return {name: 'posts', params: {type: route.params.type}};
        }
    },
    {
        type: 'path-exists',
        redirect: {name: 'home'},
    }
]

export function verify(route, guard) {
    if(typeof(guard) === 'string') {
        switch(guard) {
            case 'auth':
                return !!store.getters.auth;
            case 'guest':
                return !store.getters.auth;
            case 'exists':
                if(!store.getters.loaded) return true;
                return !!store.state.posts?.find(p => p.id === parseInt(route.params.id) && p.type === route.params.type);
            case 'path-exists':
                return !!config.post[route.params.type];
        }
    }
    return false;
}

export function getRedirect(route, guard) {
    let g = guards.find(g => g.type === guard);
    if(typeof g?.redirect === 'object') {
        return g.redirect;
    }
    if(typeof g?.redirect === 'function') {
        return g.redirect(route);
    }
    return null;
}
