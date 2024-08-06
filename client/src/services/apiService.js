import { BASE_URL } from "../constants";

export const apiService = async (method, url, data) => {
    
    const options = {};

    if (method !== 'GET') {
        options.method = method
        options.headers = {
            'Content-Type': 'application/json'
        }
        options.body = JSON.stringify(data);
    }

    const userData = JSON.parse(localStorage.getItem('auth'));

    if (userData) {
        options.headers = {
            ...options.headers,
            accessToken: userData.token
        }
    }
    
    const response = await fetch(`${BASE_URL}${url}`, options);
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