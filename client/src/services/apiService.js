import { BASE_URL } from "../constants";

export const apiService = async (method, path, data) => {

    const options = {};

    if (method !== 'GET') {
        options.method = method
        options.headers = {
            'Content-Type': 'Application/json'
        }
        options.body = JSON.stringify(data);
    }

    
        const response = await fetch(`${BASE_URL}${path}`, options);
        const result = await response.json();

        if (!response.ok) {
            throw result;
        }

        return result;
}

export const get = apiService.bind('', 'GET');
export const post = apiService.bind('', 'POST');
export const put = apiService.bind('', 'PUT');
export const deleteOne = apiService.bind('', 'DELETE');

export default {
    get,
    post,
    put,
    deleteOne
};