import { createStore } from 'vuex';

export default createStore({
    state () {
        return {
            path: "http://127.0.0.1:8000",
            errors: [],
        }
    },
    getters: {
        getPath: (state: any) => state.path,
        getErrors: (state: any) => state.errors,
    },
    mutations: {
        setErrors (state, errors: any) {
            state.errors = errors
        },
    },
});