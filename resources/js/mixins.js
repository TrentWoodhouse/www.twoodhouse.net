import {helpers} from "./helpers";
import {store} from './store';

export const globalMixin = {
    methods: {
        ...helpers,
    },
}

export const projectMixin = {
    created() {
        if(!store.getters.projects) {
            store.dispatch('getProjects');
        }
    },
}
