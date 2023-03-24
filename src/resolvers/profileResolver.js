import { generalRequest, getRequest } from '../../utilities/utilities';
import { URLprofile, URLauth} from '../server';

export const profileResolvers = {
    Query:{
        // Profile gets
        getProfile: (_, { id }) => Promise.resolve(generalRequest(`${URLprofile}/profile/get/${id}`, '')).then((value) => { return value.profiles}),         // get with a ID
        allProfiles: (_) => Promise.resolve(generalRequest(`${URLprofile}/profile/all`, '')).then((value) => { return value.profiles}),                      // get all profiles
        findProfiles: (_, { value }) => Promise.resolve(generalRequest(`${URLprofile}/profile/find/${value}`, '')).then((value) => { return value.profiles}) // find profiles
    },
    // Filling userID field in profile with connection to user
    profile:{
        userID:({userID}) => {return Promise.resolve(generalRequest(`${URLauth}/auth/info/${userID}`, '')).then((value) => {return value[0]})}
    },

    Mutation:{
        // Profile create and update
        createProfile: (_, { profile }) => { 
            return (async () => {
                // querys conditions definition
                let googleIdQuery = await generalRequest(`${URLauth}/auth/info/${profile.userID}`, '').then((value) => {return value});
                // conditions
                if (googleIdQuery.length == 0){return "Profile failed to add, invalid googleId"}
                else {return Promise.resolve(generalRequest(`${URLprofile}/profile/register`, 'POST', profile)).then((value) => { return value.msg})}
              })()
        }, 


        updateProfile: (_, { profile }) => { 
            return (async () => {
                // querys conditions definition
                let googleIdQuery = await generalRequest(`${URLauth}/auth/info/${profile.userID}`, '').then((value) => {return value});
                // conditions
                if (googleIdQuery.length == 0){return "Profile failed to add, invalid googleId"}
                else {return generalRequest(`${URLprofile}/profile/update`, 'PUT', profile).then((value) => { return value.msg})}
            })()
        }
    }
};