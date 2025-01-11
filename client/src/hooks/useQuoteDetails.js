import apiService from "../services/apiService";

const useQuoteDetails = () => {
    
    const getDetails = async (quoteId) => {
        console.log(quoteId);
        try {
            const quoteDetails = await apiService.get(`/quotes/${quoteId}`);
            return quoteDetails;
        } catch(err) {
            return err; 
        }
    }
    
    return {
        getDetails
    }
}

export default useQuoteDetails;