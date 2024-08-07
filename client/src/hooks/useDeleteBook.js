import { useParams } from "react-router-dom";
import apiService from "../services/apiService";
import { useNavigate } from "react-router-dom";

const useDeleteBook = () => {
    const { bookId } = useParams();
    const navigate = useNavigate();

    const deleteBook = async () => {

        try {
            const deletedBook = await apiService.deleteOne(`/books/${bookId}/delete`)
            navigate('/library')
        } catch (err) {
            console.log({ message: err.message })
        }
    }

    return { deleteBook };
}

export default useDeleteBook;