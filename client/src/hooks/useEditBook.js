import apiService from "../services/apiService";
import { useNavigate } from "react-router-dom";

const useEditBook = () => {
    const navigate = useNavigate();

    const update = async (bookDetails) => {
        
        try {
            const updatedBook = await apiService.put(`/books/${bookDetails._id}/edit`, bookDetails)
            navigate(`/library/${updatedBook._id}`)
        } catch (err) {
            console.log(err.message)
        }
    }

    return { update }
}

export default useEditBook;