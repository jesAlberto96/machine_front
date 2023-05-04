import { createStore } from 'vuex';
import config from '@/store/config';
import { API } from '@/API';

export default createStore({
    state () {
        return {
            user: false,
        }
    },

    actions: {
        async getByPoll(context: any, { code }: any){
            return await API.GET(`${config.getters.getPath}/api/v1/questions-by-poll/${code}`);
        },
    }
})