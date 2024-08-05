import apiService from "../services/apiService";

const useProfile = () => {

    const getUser = async () => {
        const user = await apiService.get('/user/profile')
    }

    return { getUser };
}

export default useProfile;