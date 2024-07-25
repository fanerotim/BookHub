import { BASE_URL } from "../constants";

const useAuth = (values, url) => {

    fetch(`${BASE_URL}/user/${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(values)
    }) 
    .then(response => response.json())
    .then(result => {
        localStorage.setItem('userData', JSON.stringify(result))
    })
    .catch(err => console.log(err.message)) 
    
}

export default useAuth;