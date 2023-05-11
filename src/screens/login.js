

import React,{ useContext,useState} from "react";
import {StyleSheet,View} from 'react-native';
import {Title} from 'react-native-paper';

import FormInput from "../components/formInput";
import FormButton from "../components/formButton";
import Loading from "../components/loading";
import { AuthContext } from "../context/authProvider";




export default function LoginScreen({ navigation}){
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {login,loading} = useContext(AuthContext);

    if(loading){
        return<Loading/>;
    }

    return(
        <View style = {styles.container}>
            <Title styles = {styles.titleText}>Welcome</Title>

            <FormInput
            labelName='Email'
            value={email}
            autoCapitalize='none'
            onChangedText={(userEmail) => setEmail(userEmail)}  
            />

            <FormInput
            labelName='Password'
            securetextEntry={false}
            onChangedText={(userPassword) => setPassword(userPassword)}  
            />
            <FormButton
            title='login'
            modeValue='contained'
            labelStyle={styles.loginButtonLabel}
            onPress={() =>{
                console.log(email);
                console.log(password);
                login(email,password);
            }} 
            />

            <FormButton
            title = 'signUp'
            modeValue='text'
            uppperCase = {false}
            labelStyle={styles.navButtonText}
            onPress={()=>{
                navigation.navigate('signup')
            }}
            />

        </View>
    );

}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f5f5f5',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    titleText:{
        fontSize:24,
        marginBottom:10,  
    },
    loginButtonLabel:{
        fontSize:22
    },
    navButtonText:{
        fontSize:16
    }
})