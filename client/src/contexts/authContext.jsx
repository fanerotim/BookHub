import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { auth: action.payload }
        case 'LOGOUT':
            return { auth: null }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        auth: null
    })

    // the useEffect hook is used to set persisted state by checking if we have auth item in local storage
    useEffect(() => {
        const auth = JSON.parse(localStorage.getItem('auth'));

        if (auth) {
            dispatch({type: 'LOGIN', payload: auth})
        }
    }, [])

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}