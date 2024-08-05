import apiService from "../services/apiService";


const useAddBook = () => {

    const add = async (values) => {

        const newBook = await apiService.post('/books/add-book', values);
    }

    return { add };
}

export default useAddBook;