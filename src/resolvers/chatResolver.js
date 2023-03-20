import { generalRequest, getRequest } from '../../utilities/utilities';

export const chatResolvers = {
    Query:{
        // chat gets
        getChatId: (_, { id }) => Promise.resolve(generalRequest(`http://0.0.0.0:8000/chat/${id}`, '')).then((value) => { return value}),         // get chat by ID
        getChats: (_) => Promise.resolve(generalRequest(`http://0.0.0.0:8000/chat`, '')).then((value) => { return value}),                      // get all chats
        getChatUser: (_, { name }) => Promise.resolve(generalRequest(`http://0.0.0.0:8000/chat/${name}`, '')).then((value) => { return value}) // get chat by user
    },

    Mutation:{
        // chat create and update
        createChat: (_, { chat }) => Promise.resolve(generalRequest(`http://0.0.0.0:8000/chat/`, 'POST', chat)).then((value) => { return value}), //Create a chat
        addMessage: (_, { chat }) => Promise.resolve(generalRequest(`http://0.0.0.0:8000/chat/`, 'PATCH', chat)).then((value) => { return value})      //Add a message
    }
};