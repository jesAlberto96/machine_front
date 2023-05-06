import { createStore } from 'vuex';

export default createStore({
    state () {
        return {
            path: "https://apptest.innguia.com",
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