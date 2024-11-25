import apiService from "../services/apiService";

const useAddQuote = () => {
    
    const add = async (values) => {
        const newQuote = await apiService.post('/quotes/add', values);
    }

    return {
        add
    }
}

export default useAddQuote;