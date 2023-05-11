

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React,{createContext, useState} from "react";

import {auth} from "../firebase/index"



export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState('');
    const [loading,setLoading] = useState(false);

    return(
        <AuthContext.Provider
        value = {{
            user,
            setUser,
            loading,
            setLoading,
            login:async (email,password) =>{

            },
            register:async(displayName,email,password) =>{
                setLoading(true);
                try{
                    const userCredential = await createUserWithEmailAndPassword(
                        auth,email,password);

                        await updateProfile(auth.currentUser,{
                            displayName:displayName
                        });

                        const currentUser = userCredential.user;
                        console.log("firebase user created : ",currentUser);
                }catch(e){
                    console.log(e);
                }finally{
                    setLoading(false);
                }

            },
            logout:async() =>{

            }
        }}
        >
            {children}

        </AuthContext.Provider>
    );

}