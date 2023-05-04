import axios from 'axios'
import config from '@/store/config'

function handleErrorsPOST(data: any){
    if ('errors' in data){
        const errors = Object.values(data.errors);
        const finalErrors: any = [];
        errors.map(function (error: any) {
            finalErrors.push(error);
        });

        return {
            success: false,
            errors: finalErrors
        }
    }

    return {
        success: false,
        errors: [
            "Ocurrio un error innesperado, por favor vuelva a intentarlo"
        ]
    }
}

function handleErrorsGET(error: any){
    if (error.response.data.message == "Unathorized"){
        return {
            success: false,
            errors: [
                "Accesos invalidos por favor verifique correo y contraseña"
            ]
        }
    }

    return {
        success: false,
        errors: [
            "Ocurrio un error innesperado, por favor vuelva a intentarlo"
        ]
    }
}

const API = {
    async GET(path: any = ""){
        try{
            await config.dispatch('takeToken');

            const response = await axios.get(path, {
                headers: {
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${config.getters.getToken}`
                },
            });

            return response.data
        } catch (error: any){
            return handleErrorsGET(error);
        }
    },

    async POST(path: any, data: any){
        try{
            await config.dispatch('takeToken');

            const response = await axios.post(path,
                data,
                {
                    headers: {
                        'Authorization': `Bearer ${config.getters.getToken}`
                    }
                }
            );

            return response.data;
        } catch (error: any){
            return handleErrorsPOST(error.response.data);
        }
    },

    async PUT(path: any, data: any){
        try{
            await config.dispatch('takeToken');

            const response = await axios.put(path,
                data,
                {
                    headers: {
                        'Authorization': `Bearer ${config.getters.getToken}`
                    }
                }
            );

            return response.data;
        } catch (error: any){
            return handleErrorsPOST(error.response.data);
        }
    },
}

export { API };