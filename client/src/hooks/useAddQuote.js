import apiService from "../services/apiService";

const useAddQuote = () => {
    
    const add = async (values) => {
        const newQuote = await apiService.post('/quotes/add', values);
        console.log(newQuote);
    }

    return {
        add
    }
}

export default useAddQuote;