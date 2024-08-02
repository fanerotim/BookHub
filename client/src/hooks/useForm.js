import { useEffect, useState } from "react";

const useForm = (initialFormData) => {
    const [values, setValues] = useState(initialFormData);

    useEffect(() => {
        setValues(initialFormData)
    }, [initialFormData])

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
        setValues,
        handleChange
    };
}

export default useForm;