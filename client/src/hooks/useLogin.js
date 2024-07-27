import apiService from "../services/apiService";
import { useAuthContext } from "./useAuthContext";

const useLogin = () => {

    const { dispatch } = useAuthContext();

    const login = async (values) => {

        // make a request to the server
        const user = await apiService.post('/user/login', values);

        // TODO: Validation

        // add user details to local storage
        localStorage.setItem('auth', JSON.stringify(user));

        // update React state with user details
        dispatch({ type: 'LOGIN', payload: user })
    }

    return login;
}

export default useLogin;