
import React from "react";
import {Dimensions,StyleSheet} from 'react-native';
import { Button } from "react-native-paper";

const{ width,heigth} = Dimensions.get('screen');

export default function FormButton({title,modeValue,uppperCase = true,onPress,labelStyle}){
    return(
        <Button
        mode={modeValue}
        style = {styles.button}
        labelStyle = {labelStyle}
        uppercase = {uppperCase}
        onPress={onPress}
        contentStyle = {styles.buttonContainer}
        >
            {title}
        </Button>
    );

}

const styles = StyleSheet.create({
    button:{
        marginTop:10,
    },
    buttonContainer:{
        width:width/2,
        heigth:heigth/15,
    }

});