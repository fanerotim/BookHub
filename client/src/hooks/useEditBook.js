import apiService from "../services/apiService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const useEditBook = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const update = async (bookDetails) => {
        
        try {
            const updatedBook = await apiService.put(`/books/${bookDetails._id}/edit`, bookDetails)
            navigate(`/library/${updatedBook._id}`)
        } catch (err) {
            setError((oldError) => err.message)
            // console.log(err.message)
        }
    }

    return { update, error }
}

export default useEditBook;