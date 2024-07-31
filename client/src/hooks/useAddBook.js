import apiService from "../services/apiService";
import { useNavigate } from 'react-router-dom';

const useAddBook = () => {

    const navigate = useNavigate();

    const add = async (values) => {
        try {
            const newBook = await apiService.post('/books/add-book', values);
            navigate('/library')
        } catch (err) {
            // TODO: add error handling
            console.log(err.message);
        }
    }

    return { add };
}

export default useAddBook;