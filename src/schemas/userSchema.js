export const userTypeDef = 
` type user {
    _id: String ,
    googleId: String!,
    givenName: String!,
    familyName: String!, 
    email: String!,
    imageUrl: String!,
    authStatus: Boolean!,
    createdAt: String,
    updatedAt: String
    
}
input userInput {
    _id: String,
    googleId: String!,
    givenName: String!,
    familyName: String!, 
    email: String!,
    imageUrl: String!,
    authStatus: Boolean!,
    createdAt: String,
    updatedAt: String
}
`


export const userQueries = `
getUsers: [user]
getUserId(id: String!): user
`


export const userMutations = `
loginUser(user: userInput!): user
logoutUser (id: String!): user
`