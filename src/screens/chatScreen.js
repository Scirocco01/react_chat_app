

import React,{useContext,useEffect,useState} from "react";
import { Bubble,GiftedChat } from "react-native-gifted-chat";

import Loading from "../components/loading";
import { AuthContext } from "../context/authProvider";
import { chatkitty } from "../chatkitty";

export default function ChatScreen({ route }){

    

    const {user } = useContext(AuthContext);
    const {channel} = route.params;
    
    


    const [messages, setMessages] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() =>{
        const startChatSessionResult = chatkitty.startChatSession({
            channel:channel,
            onMessageReceived:(messages) =>{
                setMessages((currentMessages) =>
                GiftedChat.append(currentMessages,[mapMessage(messages)])
                );
            }
        });
        chatkitty.listMessages({
            channel:channel
        })
        .then((result) =>{
            setMessages(result.paginator.items.map(mapMessage));

            setLoading(false);
        });
        return startChatSessionResult.session.end;

    },[user,channel]);

    async function handleSend(pendingMessage){
        await chatkitty.sendMessage({
            channel:channel,
            body:pendingMessage[0].text
        });
    }

    function renderBubble(props){
        return(
            <Bubble
                {...props}
                wrapperStyle={{
                    left:{
                        backgroundColor:'#d3d3d3'
                    }
                }}
            />
        );
    }

    if(loading){
        return <Loading/>
    }

    return(
        <GiftedChat
        messages={messages}
        onSend={handleSend}
        user={mapUser(user)}
        renderBubble={renderBubble}
        
        />
    );
}

function mapMessage(message){
    return{
        _id:message.id,
        text:message.body,
        craetedAt:new Date(message.createdTime),
        user:mapUser(message.user)
    };
}

function mapUser(user){
    return {
        _id:user.id,
        name:user.displayName,
        avatar:user.displayPictureUrl
    };
}
