import { generalRequest, getRequest } from '../../utilities/utilities';

export const userResolvers = {
    Query:{
        getUserId: (_, { id }) => Promise.resolve(generalRequest(`http://host.docker.internal:3002/auth/info/${id}`, '')).then((value) => {return value[0]}),
        getUsers: (_) => Promise.resolve(generalRequest(`http://host.docker.internal:3002/auth/info/`, '')).then((value) => { return value})                     
    },

    Mutation:{
        
        logoutUser: (_,{id})  =>  Promise.resolve(generalRequest(`http://localhost:3002/auth/logout/${id}`, 'PUT')).then((value) => { return value}), 

        loginUser: (_,{user}) => Promise.resolve(generalRequest(`http://localhost:3002/auth/login/${user.googleId}`, 'PUT')).then((value) => { 
            if(value==null){
                console.log("Not found user, creating now")
                return Promise.resolve(generalRequest(`http://localhost:3002/auth/login/`, 'POST', user)).then((value) => { return value})
            }else{
                console.log("User found, login it")
                return value
            }   
        }), 
    }
};