

import { createUserWithEmailAndPassword, updateProfile,signInWithEmailAndPassword } from "firebase/auth";
import React,{createContext, useState} from "react";

import {auth} from "../firebase/index";
import { ChatKitty } from "@chatkitty/core";
import { chatkitty } from "../chatkitty";





export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(false);

    return(
        <AuthContext.Provider
        value = {{
            user,
            setUser,
            loading,
            setLoading,
            login:async (email,password) =>{
                setLoading(true);

                try{
                    const userCredential = await signInWithEmailAndPassword(auth,email,password);
                    const currentUser = userCredential.user;

                    const result = await chatkitty.startSession({
                        username:currentUser.uid,
                        auth:{
                            idToken:await currentUser.getIdToken()
                        }
                    });

                    if(result.failed){
                        console.log('could not login');
                    }
                }catch(e){
                    console.error(e);

                }finally{
                    setLoading(false);
                }

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
                        const startSessionResult = await chatkitty.startSession({
                            username:currentUser.uid,
                            auth:{
                                idToken: await currentUser.getIdToken()
                            }
                        });
                        if(startSessionResult.failed){
                            console.log('couldNotSignUp');
                        }
                        
                }catch(e){
                    console.log(e);
                }finally{
                    setLoading(false);
                }

            },
            logout:async() =>{
                try{
                    await chatkitty.endSession();

                }catch(e){
                    console.error(e);
                }

            }
        }}
        >
            {children}

        </AuthContext.Provider>
    );

}