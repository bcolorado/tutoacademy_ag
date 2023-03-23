import { generalRequest, getRequest } from '../../utilities/utilities';
import { URLprofile } from '../server';

export const profileResolvers = {
    Query:{
        // Profile gets
        getProfile: (_, { id }) => Promise.resolve(generalRequest(`${URLprofile}/profile/get/${id}`, '')).then((value) => { return value.profiles}),         // get with a ID
        allProfiles: (_) => Promise.resolve(generalRequest(`${URLprofile}/profile/all`, '')).then((value) => { return value.profiles}),                      // get all profiles
        findProfiles: (_, { value }) => Promise.resolve(generalRequest(`${URLprofile}/profile/find/${value}`, '')).then((value) => { return value.profiles}) // find profiles
    },
    Mutation:{
        // Profile create and update
        createProfile: (_, { profile }) => Promise.resolve(generalRequest(`${URLprofile}/profile/register`, 'POST', profile)).then((value) => { return value.data}), //Create a profile
        updateProfile: (_, { profile }) => Promise.resolve(generalRequest(`${URLprofile}/profile/update`, 'PUT', profile)).then((value) => { return value.msg})      //Update a profile
    }
};