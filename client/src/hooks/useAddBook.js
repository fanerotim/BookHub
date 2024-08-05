import { useState } from "react";
import apiService from "../services/apiService";
import { useNavigate } from 'react-router-dom';

const useAddBook = () => {

    const [error, setError] = useState(null)
    const navigate = useNavigate();

    const add = async (values) => {
        try {
            const newBook = await apiService.post('/books/add-book', values);
            navigate('/library')
        } catch (err) {
            setError((oldError) => err.message)
            // console.log(err.message);
        }
    }

    return { add, error };
}

export default useAddBook;