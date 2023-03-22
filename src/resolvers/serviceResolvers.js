import { generalRequest } from '../../utilities/utilities';

const URL = 'http://localhost:8080/services';

export const serviceResolvers = {
	Query: {
		allServices: () => Promise.resolve(generalRequest(URL, 'GET')).then((value) => {  return value}),
		serviceById: (_, { id }) => Promise.resolve(generalRequest(`${URL}/${id}`, 'GET')).then((value) => {  return value})
	},
	Mutation: {
		createService: (_, { service }) => Promise.resolve(generalRequest(URL, 'POST', service)).then((value) => { return value}),
		updateService: (_, { id, service }) => Promise.resolve(generalRequest(`${URL}/${id}`, 'PUT', service)).then((value) => { return value}),
		deleteService: (_, { id }) => Promise.resolve(generalRequest(`${URL}/${id}`, 'DELETE')).then((value) => { return value})
	}
};

