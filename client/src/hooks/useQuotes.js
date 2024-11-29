import apiService from '../services/apiService';

const useQuotes = () => {

    const getAllQuotes = async (url) => {
        
        try {
            const quotes = await apiService.get('/quotes');
   
            return quotes;
        } catch (err) {
            return err;
        }
    }

    return {
        getAllQuotes
    }
}

export default useQuotes;