import { createStore } from 'vuex';
import config from '@/store/config';
import { API } from '@/API';

export default createStore({
    actions: {
        async findAll(){
            return await API.GET(`${config.getters.getPath}/api/v1/coins`);
        },
    }
})