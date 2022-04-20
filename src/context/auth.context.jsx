import React, { createContext, useEffect, useState } from "react"
import authService from "../services/auth.service"

const AuthContext = createContext()

function AuthProviderWrapper(props) {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)


    const storeToken = token => {
        localStorage.setItem('authToken', token)
    }

    const removeToken = () => {
        localStorage.removeItem('authToken')
    }

    const getToken = () => {
        return localStorage.getItem('authToken')
    }

    const authenticateUser = () => {
        debugger
        const token = getToken()
        if (token) {
            authService
                .verify(token)
                .then(res => {
                    setUser(res.data)
                    setIsAuthenticated(true)
                })
                .catch(err => logout())
        } else {
            logout()
        }
    }

    const logout = () => {
        removeToken()
        setUser(null)
        setIsAuthenticated(false)
    }

    useEffect(() => authenticateUser(), [])

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, storeToken, authenticateUser }}>
            {props.children}
        </AuthContext.Provider>

    )
}

export { AuthProviderWrapper, AuthContext }