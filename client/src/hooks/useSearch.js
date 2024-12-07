import apiService from "../services/apiService";

const useSearch = () => {
    
    const search = async (url) => {
        try {
            const searchReq = await apiService.get(url);
            return searchReq;
        } catch(err) {
            console.log(err);
        }
    }   
    
    return {
        search
    }
}

export default useSearch;