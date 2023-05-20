import { collectSubFields } from '@graphql-tools/utils';
import { generalRequest } from '../../utilities/utilities';
import { URLmeetsched, URLprofile } from '../server';
const URL = URLmeetsched;

export const meetschedResolvers = {
	//Gets
	Query: {
		//Get all requests
		allRequests: (_) =>
            Promise.resolve(generalRequest(`${URL}/requests`, 'GET')).then((value) => { return value }),
		//Get request by id
		requestById: (_, { id }) =>
            Promise.resolve(generalRequest(`${URL}/requests/${id}`, 'GET')).then((value) => { return value }),
		//Get all meetings
		allMeetings: (_) =>
			generalRequest(`${URL}/meetings`, 'GET'),
		//Get meetings by id
		meetingById: (_, { id }) =>
			generalRequest(`${URL}/meetings/${id}`, 'GET'),
		//Get all meetings from one request(using the request id) 
		meetingsFromRequestById: (_, { request_id }) =>
			generalRequest(`${URL}/requests/${request_id}/meetings/`, 'GET'),
	},
	// Filling user_req and tutor fields in request using connection to profile
    Request:{
        user_req:({user_req}) => {return Promise.resolve(generalRequest(`${URLprofile}/profile/get/${user_req}`, '')).then((value) => { return value.profiles})},         
        tutor:({tutor}) => {return Promise.resolve(generalRequest(`${URLprofile}/profile/get/${tutor}`, '')).then((value) => { return value.profiles})}        
    },
	Mutation: {
		createRequest: (_, { request }) => {
            return (async () => {
                // querys conditions definition
                let reqUserQuery =  await generalRequest(`${URLprofile}/profile/get/${request.user_req}`, '').then((value) => {return value.profiles});
                let tutorQuery =  await generalRequest(`${URLprofile}/profile/get/${request.tutor}`, '').then((value) => { return value.profiles});

                // conditions
                if (request.accepted != 'true' && request.accepted != 'false') {return "Failed to update request, the field 'accepted' has an invalid value"}
                if (reqUserQuery == null || tutorQuery == null){return "Failed to create request, one or both profiles are invalid"}


				let createMutation = await generalRequest(`${URL}/requests`, 'POST', request).then((value) => { return value })
				if (!createMutation.id){return "Failed operation."}
				else {return "Request created successfully"}

				
              })()
			},
		updateRequest: (_, { id, request }) => {
            return (async () => {
                // querys conditions definition
                let reqUserQuery =  await generalRequest(`${URLprofile}/profile/get/${request.user_req}`, '').then((value) => {return value});
                let tutorQuery =  await generalRequest(`${URLprofile}/profile/get/${request.tutor}`, '').then((value) => { return value});

                // conditions
				if (request.accepted != 'true' && request.accepted != 'false') {return "Failed to update request, the field 'accepted' has an invalid value"}
                if (reqUserQuery == null || tutorQuery == null){return "Failed to update request, one or both profiles are invalid"}

				let updateMutation = await generalRequest(`${URL}/requests/${id}`, 'PUT', request).then((value) => { return value })
				if (!updateMutation.id){return "Failed operation, a request with the given id does not exist."}
				else {return "Request updated successfully"}

              })()
			},
		deleteRequest: (_, { id }) =>
            Promise.resolve(generalRequest(`${URL}/requests/${id}`, 'DELETE')).then((value) => { return value}),
		createMeeting: (_, { id, meeting }) =>
			generalRequest(`${URL}/requests/${id}/meetings/`, 'POST', meeting),
		updateMeeting: (_, { id, meeting }) =>
			generalRequest(`${URL}/meetings/${id}`, 'PUT', meeting),
		deleteMeeting: (_, { id }) =>
			generalRequest(`${URL}/meetings/${id}`, 'DELETE')
	}
};
