import apiService from "../services/apiService";

const useBookDetails = () => {
    const getDetails = async (bookId) => {
        try {
            const bookDetails = await apiService.get(`/books/library/${bookId}`);
            return bookDetails;
        } catch (err) {
            return (err);
        }
    }

    return { getDetails };
}

export default useBookDetails;