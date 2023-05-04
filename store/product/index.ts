import { createStore } from 'vuex';
import config from '@/store/config';
import { API } from '@/API';

export default createStore({
    actions: {
        async create(context: any, payload: any){
            return await API.POST(`${config.getters.getPath}/api/v1/polls`, payload);
        },

        async findAll(){
            return await API.GET(`${config.getters.getPath}/api/v1/products`);
        },
    }
})