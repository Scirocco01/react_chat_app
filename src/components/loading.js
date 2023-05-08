
import React from "react";
import { ActivityIndicator,StyleSheet,View } from "react-native";


export default function loading(){
    return(
        <view
        style={styles.loadingContainer}>
           <ActivityIndicator size = 'large' color = '#5b3a70'/>     
        </view>
    );
}


const styles = StyleSheet.create({
    loadingContainer:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'

    }
});


