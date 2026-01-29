import React, {createContext, useContext, useState, useEffect, ReactNode, Children} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


interface AuthContextType {
    isLoggedIn: boolean;
    isLoading: boolean;
    login: () => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
  

interface AuthProviderProps {
    children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
 const [isLoggedIn, setIsLoggedIn] = React.useState(false);
 const [isLoading, setIsLoading] = React.useState(true);
 // Checking The Session on app launch
 useEffect(() => {
  const checkSession = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            if (token) {
                setIsLoggedIn(true)
            }
        } catch (error) {
        console.error("failed to laod session ", error)
        } finally {
            setIsLoading(false);
        }
    }
    checkSession();
}, [])

const login = async () => {
    try {
        //save actual JWT token from web service
        await AsyncStorage.setItem('userToken', 'active-session-token')
        setIsLoggedIn(true)
    } catch (error) {
        console.error("Login error ", error)
    }
}

const logout = async () => {
    try {
        //save actaull JWT token from web service
        await AsyncStorage.removeItem('userToken')
        setIsLoggedIn(false)
    } catch (error) {
        console.error("Logout error ", error)
    }
}

return (<AuthContext.Provider value={{ isLoading, isLoggedIn, login, logout }}>{children}</AuthContext.Provider>)
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context
}