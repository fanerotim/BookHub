import { useState } from "react";

const useForm = (initialFormData) => {
    const [values, setValues] = useState(initialFormData);

    const handleChange = (e) => {
        setValues((oldData) => {
            return {
                ...oldData,
                [e.target.name]: e.target.value
            }
        })
    }

    return {
        values,
        handleChange
    };
}

export default useForm;