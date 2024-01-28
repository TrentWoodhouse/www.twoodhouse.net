import {store} from './store';

export const helpers = {
    publicImage(filename) {
        return '/images/' + filename;
    },
    loadImage(path, callback) {
        store.commit('saveImage', {path, callback});
    },
}
