export const chatTypeDef = ` type chat {
    chatId: Int,
    sender: String,
    receiver: String,
    messages: [messageSchema],
    state: Boolean,
    createTime: String
}

input chatInput {
    chatId: Int,
    sender: String,
    receiver: String,
    messages: [messageSchemaInput],
    state: Boolean,
    createTime: String
}

type messageSchema {
    messageId: Int,
    sender: String,
    body: String,
    sendTime: String
}

input messageSchemaInput {
    messageId: Int,
    sender: String,
    body: String,
    sendTime: String
}


`


export const chatQueries = `

getChats: [chat]
getChatId(id: Int!): chat
getChatUser(name: String!): [chat]

`


export const chatMutations = `

createChat(chat: chatInput!): String
addMessage(chat: chatInput!): String

`