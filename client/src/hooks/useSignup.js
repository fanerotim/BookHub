import { useState } from 'react';
import apiService from '../services/apiService'
import { useAuthContext } from './useAuthContext';
import { useNavigate } from 'react-router-dom';

export const useSignup = () => {

    const [error, setError] = useState('');
    const {dispatch} = useAuthContext();
    const navigate = useNavigate();

    const signup = async (values) => {

        try {
            const user = await apiService.post('/user/register', values);

            // update local storage with new user details
            localStorage.setItem('auth', JSON.stringify(user))
            // update state with new user details
            dispatch({type: 'LOGIN', payload: user})

            // upon success redirect to home page
            navigate('/')
        } catch (err) {
            setError(err.message)
        }
    }

    return {signup, error}
}