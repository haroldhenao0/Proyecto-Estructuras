import  {createContext, useContext} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase';

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    return context
}

export function AuthProvider ({children}){

    const singup = (username, password) => {
        createUserWithEmailAndPassword(auth, username, password);
    }

    return <authContext.Provider value={{singup}}>{children}</authContext.Provider>;
}