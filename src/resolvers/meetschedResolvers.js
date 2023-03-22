import { generalRequest } from '../../utilities/utilities';

const URL = `http://localhost:3000`;

export const requestResolvers = {
	Query: {
		allRequests: (_) =>
            Promise.resolve(generalRequest(`${URL}/requests`, 'GET')).then((value) => { return value }),
		requestById: (_, { id }) =>
            Promise.resolve(generalRequest(`${URL}/requests/${id}`, 'GET')).then((value) => { return value }),
	},
	Mutation: {
		createRequest: (_, { request }) =>
            Promise.resolve(generalRequest(`${URL}/requests`, 'POST', request)).then((value) => { return value }),
		updateRequest: (_, { id, request }) =>
            Promise.resolve(generalRequest(`${URL}/requests/${id}`, 'PUT', request)).then((value) => { return value }),
		deleteRequest: (_, { id }) =>
            Promise.resolve(generalRequest(`${URL}/requests/${id}`, 'DELETE')).then((value) => { return value})
	}
};

export const meetingResolvers = {
	Query: {
		allMeetings: (_) =>
			generalRequest(`${URL}/meetings`, 'GET'),
		meetingById: (_, { id }) =>
			generalRequest(`${URL}/meetings/${id}`, 'GET'),
		meetingsFromRequestById: (_, { request_id }) =>
			generalRequest(`${URL}/requests/${request_id}/meetings/`, 'GET'),
	},
	Mutation: {
		createMeeting: (_, { id, meeting }) =>
			generalRequest(`${URL}/requests/${id}/meetings/`, 'POST', meeting),
		updateMeeting: (_, { id, meeting }) =>
			generalRequest(`${URL}/meetings/${id}`, 'PUT', meeting),
		deleteMeeting: (_, { id }) =>
			generalRequest(`${URL}/meetings/${id}`, 'DELETE')
	}
};