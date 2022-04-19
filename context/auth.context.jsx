import React, { createContext, useState } from "react"


const AuthContext = createContext()

function AuthProviderWrapper(props) {
    const [user, setUser] = useState(null)

    const storeToken = token => {
        localStorage.setItem('authToken', token)
    }

    const removeToken = () => {
        localStorage.removeItem('authToken')
    }

    const getToken = () => {
        return localStorage.getItem('authToken')
    }

    return (
        <AuthContext.Provider value={{ user, storeToken }}>
            {props.children}
        </AuthContext.Provider>

    )
}

export { AuthProviderWrapper, AuthContext }