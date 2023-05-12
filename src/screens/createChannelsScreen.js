
import React,{useState} from 'react';
import {StyleSheet,View} from 'react-native';
import {IconButton,Title} from 'react-native-paper';

import { chatkitty } from '../chatkitty';
import FormButton from '../components/formButton';
import FormInput from '../components/formInput';

export default function CreateChannelsScreen([navigtation]){
    const [channelName,setChannelName] = useState('');

    function handleButtonPress(){
        if(channelName.length > 0 ){
            chatkitty.createChannel({
                type:'PUBLIC',
                name:channelName
            }).then(() => navigtation.navigate('home'));
        }
    }

    return(
        <View style = {styles.rootContainer}>
            <View style = {styles.closeButtonContiner}>
                <IconButton
                icon = 'close-circle'
                size = {36}
                iconColor = '#5b3a70'
                onPress ={() => navigtation.goBack()}
                />
            </View>
            <View style = {styles.innerCOntainer}>
                <Title style = {styles.title}>CreateNewTitle</Title>
                <FormInput
                labelName='channel name'
                value={channelName}
                onChangedText={(text) => setChannelName(text)}
                />
                <FormButton
                title='Create'
                modeValue='contained'
                labelStyle={styles.buttonLabel}
                onPress={() => handleButtonPress()}
                disabled = {channelName.length === 0}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    rootContainer:{
        flex:1
    },
    closeButtonContiner:{
        position:'absolute',
        top:30,
        right:0,
        zIndex:1,
    },
    innerCOntainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:24,
        marginBottom:10,
    },
    buttonLabel:{
        fontSize:22
    }
})