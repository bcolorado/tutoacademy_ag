import { generalRequest, getRequest } from '../../utilities/utilities';
import { URLchat, URLprofile } from '../server';

const URL = URLchat

export const chatResolvers = {
    Query:{
        // chat gets
        getChatId: (_, { id }) => Promise.resolve(generalRequest(`${URL}/chat/${id}`, '')).then((value) => { return value}),         // get chat by ID
        getChats: (_) => Promise.resolve(generalRequest(`${URL}/chat`, '')).then((value) => { return value}),                      // get all chats
        getChatUser: (_, { name }) => Promise.resolve(generalRequest(`${URL}/chat/${name}`, '')).then((value) => { return value}) // get chat by user
    },
    chat:{
        sender:({sender}) => {return Promise.resolve(generalRequest(`${URLprofile}/profile/get/${sender}`, '')).then((value) => { return value.profiles})},         // get with a ID},
        receiver:({receiver}) => {return Promise.resolve(generalRequest(`${URLprofile}/profile/get/${receiver}`, '')).then((value) => { return value.profiles})}         // get with a ID},
    },
    messageSchema:{
        sender:({sender}) => {return Promise.resolve(generalRequest(`${URLprofile}/profile/get/${sender}`, '')).then((value) => { return value.profiles})}         // get with a ID},
    },
    Mutation:{
        // chat create and update
        // Falta añadir integridad de la información.
        createChat: (_, { chat }) => Promise.resolve(generalRequest(`${URL}/chat/`, 'POST', chat)).then((value) => { return value}), //Create a chat
        addMessage: (_, { chat }) => Promise.resolve(generalRequest(`${URL}/chat/`, 'PATCH', chat)).then((value) => { return value})      //Add a message
    }
};