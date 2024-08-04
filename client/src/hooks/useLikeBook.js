import apiService from "../services/apiService";
import { useParams } from "react-router-dom";

const useLikeBook = () => {

    const { bookId } = useParams();

    const like = async () => {

        try {
            const likedBook = await apiService.post(`/books/${bookId}/like`)
            return likedBook;
        } catch(err) {
            return err.message;
        }
    }

    return { like };
}

export default useLikeBook;