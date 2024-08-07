import apiService from "../services/apiService";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

const useLibrary = () => {

    const {dispatch} = useAuthContext();
    const navigate = useNavigate();

    const getAll = async () => {   

        try {
            const allBooks = await apiService.get('/books/library');
            return allBooks;
        } catch(err) {
            // if token is changed manually e.g. token is invalid then:
            //1. clear localStorage
            localStorage.removeItem('auth');

            //2. logout user
            dispatch({type: 'LOGOUT', payload: null})
            navigate('/login')
            return err.message
        }   
    }

    return {
        getAll
    }
}

export default useLibrary;