import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 

    
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = ()=>{
        return signInWithPopup(auth, provider)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    // Observed user auth state
    useEffect(()=>{
        const unSubscribe=  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            return unSubscribe();
        }

    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn, 
        googleSignIn,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;