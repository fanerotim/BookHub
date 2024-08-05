import apiService from "../services/apiService";

const useEditBook = () => {
    
    const update = async (bookDetails) => {
        const updatedBook = await apiService.put(`/books/${bookDetails._id}/edit`, bookDetails) 
    }

    return { update }
}

export default useEditBook;