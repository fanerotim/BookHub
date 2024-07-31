import apiService from "../services/apiService";

const useLibrary = () => {

    const getAll = async () => {   

        try {
            const allBooks = await apiService.get('/books/library');
            return allBooks;
        } catch(err) {
            return err.message
        }   
    }

    return {
        getAll
    }
}

export default useLibrary;