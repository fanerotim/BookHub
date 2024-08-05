import apiService from '../services/apiService'
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {

    const { dispatch } = useAuthContext();

    const signup = async (values) => {

        const user = await apiService.post('/user/register', values);

        // update local storage with new user details
        localStorage.setItem('auth', JSON.stringify(user))

        // update state with new user details
        dispatch({ type: 'LOGIN', payload: user })
    }

    return { signup }
}