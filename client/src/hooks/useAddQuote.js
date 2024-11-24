import apiService from "../services/apiService";

const useAddQuote = () => {
    
    const add = (values) => {
        const newQuote = apiService.post('/quotes/add', values);
    }

    return {
        add
    }
}

export default useAddQuote;