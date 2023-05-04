import { createStore } from 'vuex';

export default createStore({
    state () {
        return {
            // path: "https://beta.goldentimeapp.com",
            path: "http://127.0.0.1:8000",
            token: "",
            errors: [],
        }
    },
    getters: {
        getPath: (state: any) => state.path,
        getToken: (state: any) => state.token,
        getErrors: (state: any) => state.errors,
    },
    mutations: {
        setToken (state, token: any) {
            state.token = token
        },

        setErrors (state, errors: any) {
            state.errors = errors
        },
    },

    actions: {
        async takeToken(context: any){
            // const token: any = await Storage.get({ key: 'token' });

            // if (token != null){
            //     context.commit('setToken', token.value)
            // }
        },
    }
})