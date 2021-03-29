import {store} from './store';

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
        redirect(options) {
            return options.redirect || {name: 'home'};
        }
    }
]

export function verify(route, guard) {
    if(typeof(guard) === 'string') {
        switch(guard) {
            case 'auth':
                return !!store.getters.auth;
            case 'guest':
                return !store.getters.auth;
        }
    }
    else if(typeof(guard) === 'object') {
        switch(guard.type) {
            case 'exists':
                return !!store.state[guard.options.object]?.find(o => o.id === route.params.id);
        }
    }

    return false;
}

export function getRedirect(guard) {
    if(typeof(guard) === 'string') {
        return guards.find(g => g.type === guard)?.redirect;
    }
    else if(typeof(guard) === 'object') {
        return guards.find(g => g.type === guard.type)?.redirect(guard.options);
    }
    return null;
}
