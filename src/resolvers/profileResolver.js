import { generalRequest, getRequest } from '../../utilities/utilities';

export const profileResolvers = {
    Query:{
        // Profile gets
        getProfile: (_, { id }) => Promise.resolve(generalRequest(`http://host.docker.internal:5001/profile/get/${id}`, '')).then((value) => { return value.profiles}),         // get with a ID
        allProfiles: (_) => Promise.resolve(generalRequest(`http://host.docker.internal:5001/profile/all`, '')).then((value) => { return value.profiles}),                      // get all profiles
        findProfiles: (_, { value }) => Promise.resolve(generalRequest(`http://host.docker.internal:5001/profile/find/${value}`, '')).then((value) => { return value.profiles}) // find profiles
    },
    Mutation:{
        // Profile create and update
        createProfile: (_, { profile }) => Promise.resolve(generalRequest(`http://host.docker.internal:5001/profile/register`, 'POST', profile)).then((value) => { return value.data}), //Create a profile
        updateProfile: (_, { profile }) => Promise.resolve(generalRequest(`http://host.docker.internal:5001/profile/update`, 'PUT', profile)).then((value) => { return value.msg})      //Update a profile
    }
};