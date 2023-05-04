import { createStore } from 'vuex';
import config from '@/store/config';
import { API } from '@/API';

export default createStore({
    actions: {
        async findHairExperts(){
            return await API.GET(`${config.getters.getPath}/api/v1/hair-experts/all`);
        },
    }
})