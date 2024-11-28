import apiService from "../services/apiService";
import { useNavigate } from "react-router-dom";


const useAddQuote = () => {

    const navigate = useNavigate();
    
    const add = async (values) => {
        try {
            const newQuote = await apiService.post('/quotes/add', values);
            navigate('/quotes')
            // return newQuote;
        } catch(err) {
            console.log('error after api')
            return err;
        }
    }

    return {
        add
    }
}

export default useAddQuote;