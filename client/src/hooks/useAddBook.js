import apiService from "../services/apiService";

const useAddBook = () => {
    const add = async (values) => {
        try {
            const newBook = await apiService.post('/books/add-book', values);
            console.log(newBook);
        } catch (err) {
            console.log(err.message);
        }
    }

    return { add };
}

export default useAddBook;