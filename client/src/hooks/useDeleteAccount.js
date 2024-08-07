import apiService from "../services/apiService";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

const useDeleteAccount = () => {

    const navigate = useNavigate();
    const {dispatch} = useAuthContext();

    const deleteAccount = async () => {

        try {
            const deletedUser = await apiService.deleteOne('/user/delete-account');

            // upon success clear localStorage
            localStorage.removeItem('auth');

            // update state: nullify it
            dispatch({type: 'LOGOUT', payload: null}) 

            // redirect to sign up page
            navigate('/register')
        } catch(err) {
            console.log(err.message);
        }
    }

    return { deleteAccount };
}

export default useDeleteAccount;