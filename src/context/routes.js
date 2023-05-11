
import { NavigationContainer } from "@react-navigation/native";
import React,{useContext,useState,useEffect} from "react";

import { ChatKitty } from "@chatkitty/core";
import Loading from "../components/loading";

import AuthStack from "./authStack";
import HomeStack from "./homeStack";
import { AuthContext } from "./authProvider";
import { chatkitty } from "../chatkitty";




export default function Routes(){
    const {user,setUser} = useContext(AuthContext);
    const [loading,setLoading] = useState(true);
    const [initializing,setInitializing] = useState(true);

    useEffect(() => {
        return chatkitty.onCurrentUserChanged((currentUser) =>{
            setUser(currentUser);

            if(initializing){
                setInitializing(false);
            }

            setLoading(false);
        });
    },[initializing,setUser]);
    if(loading){
        return<Loading/>
    }
    return(
        <NavigationContainer>
            {user? <HomeStack/> : <AuthStack/>}
        </NavigationContainer>
    );
}