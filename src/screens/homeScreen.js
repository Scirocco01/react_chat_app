
import React,{useContext, useEffect, useState} from "react";
import { useIsFocused } from "@react-navigation/native";
import { FlatList,StyleSheet,View } from "react-native";
import { Title,Divider,List } from "react-native-paper";

import FormButton from "../components/formButton";
import { AuthContext } from "../context/authProvider";


import Loading from "../components/loading";
import { chatkitty } from "../chatkitty";



export default function HomeScreen({navigation}){

    const[channels,setChannels] = useState([]);
    const [loading,setLoading] = useState(true);

    const isFocused = useIsFocused();

    useEffect(() =>{
        let isCancelled = false;

        chatkitty.listChannels({filter:{joined:true}}).then((result) =>{
            if(!isCancelled){
                setChannels(result.paginator.items);
                if(loading){
                    setLoading(false);
                }
            }
        });

        return () => {
            isCancelled =  true;
        };
    },[isFocused,loading]);

    if(loading){
        return<Loading/>;
    }

    
        return (
            <View style = {styles.container}>
                <FlatList
                data={channels}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={()=> <Divider/>}
                renderItem={({item}) =>(
                    <List.Item
                    title = {item.name}
                    description = {item.type}
                    titleNumberOfLines={1}
                    titleStyle = {styles.listTile}
                    descriptionStyle = {styles.listDescription}
                    descriptionNumberOfLines={1}
                    onPress={() => navigation.navigate('Chat',{channel:item})}
                    />
                )}

                />
            </View>
        );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f5f5f5',
        flex:1,
    },
    listTile:{
        fontSize:22
    },
    listDescription:{
        fontSize:16
    }


})