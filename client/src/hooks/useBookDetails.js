import apiService from "../services/apiService";

const useBookDetails = () => {
    const getDetails = async (bookId) => {
        try {
            const bookDetails = await apiService.get(`/books/library/${bookId}`);
            return bookDetails;
        } catch (err) {
            console.log(err.message)
        }
    }

    return { getDetails };
}

export default useBookDetails;