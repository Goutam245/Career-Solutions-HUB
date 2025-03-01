import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    // console.log(loading,user);
    const createNewUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
    const userLogin =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
        

    } 
      const logOut=()=>{
        toast("Log Out Successful")
        setLoading(true)
        return signOut(auth)


      } 

    const updatedProfile=(updateData)=>{

      return updateProfile(auth.currentUser, updateData)
     



    }

    const authinfo ={
        user,
        setUser,
        createNewUser,
        userLogin,
        logOut,
        loading,
        updatedProfile,
        signInWithGoogle,
    };

    
    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            
          });
          return ()=>{
            unsubscribe();
          };
    },[])
    return (
        <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
   
      );
};

export default AuthProvider;