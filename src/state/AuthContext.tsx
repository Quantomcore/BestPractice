import React, {createContext, useContext, ReactNode} from 'react'

const AuthContext = createContext({
    isLoggedIn: false,
    login: () => {},
    logout: () => {}
})

interface AuthProviderProps {
    children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
 const [isLoggedIn, setIsLoggedIn] = React.useState(false);
 const login = () => setIsLoggedIn(true)
 const logout = () => setIsLoggedIn(false)
 return(<AuthContext.Provider value={{ isLoggedIn, login, logout}}>{children}</AuthContext.Provider>)

}

export const useAuth = () => useContext(AuthContext)