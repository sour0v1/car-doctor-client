import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import  { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user by email and password
    const createUserByEmailPass = (email, password) =>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const authInfo = {
        user, loading, setLoading, createUserByEmailPass
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;