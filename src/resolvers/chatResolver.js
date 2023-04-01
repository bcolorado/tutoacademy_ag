import { generalRequest, getRequest } from '../../utilities/utilities';
import { URLchat, URLprofile } from '../server';
import { connectProduce } from '../../utilities/queueProducer';
const URL = URLchat

export const chatResolvers = {
    // Gets
    Query:{
        getChatId: (_, { id }) => Promise.resolve(generalRequest(`${URL}/chat/id/${id}`, '')).then((value) => { return value}),         // get chat by ID
        getChats: (_) => Promise.resolve(generalRequest(`${URL}/chat`, '')).then((value) => { return value}),                      // get all chats
        getChatUser: (_, { name }) => Promise.resolve(generalRequest(`${URL}/chat/user/${name}`, '')).then((value) => { return value}) // get chat by user
    },
    // Filling sender and receiver field in chat with connection to profile
    chat:{
        sender:({sender}) => {return Promise.resolve(generalRequest(`${URLprofile}/profile/get/${sender}`, '')).then((value) => { return value.profiles})},         
        receiver:({receiver}) => {return Promise.resolve(generalRequest(`${URLprofile}/profile/get/${receiver}`, '')).then((value) => { return value.profiles})}        
    },
    messageSchema:{
        sender:({sender}) => {return Promise.resolve(generalRequest(`${URLprofile}/profile/get/${sender}`, '')).then((value) => { return value.profiles})}        
    },
    // Update, Create and Delete
    Mutation:{
        // Creating and chat
        createChat: (_, { chat }) => { 
            return (async () => {
                // querys conditions definition
                let senderQuery =  await generalRequest(`${URLprofile}/profile/get/${chat.sender}`, '').then((value) => {return value.profiles});
                let receiverQuery =  await generalRequest(`${URLprofile}/profile/get/${chat.receiver}`, '').then((value) => { return value.profiles});
                let messageQuery =  await generalRequest(`${URLprofile}/profile/get/${chat.messages[0].sender}`, '').then((value) => { return value.profiles});

                // conditions
                if (senderQuery == null || receiverQuery == null || messageQuery == null){return "Chat failed to add, invalid profile"}
                if (messageQuery._id == senderQuery._id || messageQuery._id == receiverQuery._id){return Promise.resolve(generalRequest(`${URL}/chat/`, 'POST', chat)).then((value) => { return value})}
                // else
                return "message sender not match with this chat" 
              })()
        }, 
        // add message to chat
        addMessage: (_, { chat }) => {
            return (async () => {
                // querys conditions definition
                let senderQuery =  await generalRequest(`${URLprofile}/profile/get/${chat.sender}`, '').then((value) => {return value.profiles});
                let receiverQuery =  await generalRequest(`${URLprofile}/profile/get/${chat.receiver}`, '').then((value) => { return value.profiles});
                let messageQuery =  await generalRequest(`${URLprofile}/profile/get/${chat.messages[0].sender}`, '').then((value) => { return value.profiles});

                // conditions
                if (senderQuery == null || receiverQuery == null || messageQuery == null)
                {return "Message failed to add, invalid profile"}
                if (messageQuery._id == senderQuery._id || messageQuery._id == receiverQuery._id){

                    try {
                        connectProduce(chat);
                    } catch (error) {
                        console.log(error)
                    }
                    
                    //return Promise.resolve(generalRequest(`${URL}/chat/`, 'PATCH', chat)).then((value) => { return value})
                    return "Enqueued successfully"
                }
                // else
                return "message sender not match with this chat" 
            })()
        }  
    }
};