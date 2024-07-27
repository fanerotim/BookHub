import apiService from "../services/apiService";
import { useAuthContext } from "./useAuthContext";
import {useNavigate} from 'react-router-dom'

const useLogout = () => {
    const { dispatch } = useAuthContext();
    const navigate = useNavigate()

    const logout = async () => {

        try {
            const logout = await apiService.post('/user/logout')

            //clear local storage
            localStorage.removeItem('auth');

            //update state: nullify it
            dispatch({type: 'LOGOUT', payload: null})

            // redirect to login
            navigate('/login')
        } catch (err) {
            console.log(err.message)
        }
    }

    return {
        logout
    }
}

export default useLogout;