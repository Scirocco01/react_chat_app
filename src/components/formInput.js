
import React from "react";
import {Dimensions,StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

const {width,height} = Dimensions.get('screen');



export default function FormInput({labelName,value,autoCapitalize,onChangedText,securetextEntry}){
    return(
        <TextInput
        label={labelName}
        value={value}
        autoCapitalize={autoCapitalize}
        onChangeText={onChangedText}
        style = {styles.input}
        secureTextEntry = {securetextEntry}
        numberOfLines={1}
        />
    );
}

const styles = StyleSheet.create({
    input:{
        marginTop:10,
        marginBottom:10,
        width:width/1.5,
        height:height/15,
    }

});