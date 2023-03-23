import { generalRequest } from '../../utilities/utilities';
import { URLtutorservice} from '../server';

const URL = `${URLtutorservice}/rates`;

const URLService = `${URLtutorservice}/services`;

export const tutorServiceResolver = {
	Query: {
		allAptitudes: () => Promise.resolve(generalRequest(URL, 'GET')).then((value) => {  return value}),
		aptitudeById: (_, { id }) => Promise.resolve(generalRequest(`${URL}/${id}`, 'GET')).then((value) => { return value}),

		allServices: () => Promise.resolve(generalRequest(URLService, 'GET')).then((value) => {  return value}),
		serviceById: (_, { id }) => Promise.resolve(generalRequest(`${URLService}/${id}`, 'GET')).then((value) => {  return value})


	},
	Mutation: {
		createAptitude: (_, { aptitude }) => Promise.resolve(generalRequest(URL, 'POST', aptitude)).then((value) => { return value}),
		updateAptitude: (_, { id, aptitude }) => Promise.resolve(generalRequest(`${URL}/${id}`, 'PUT', aptitude)).then((value) => { return value}),
		deleteAptitude: (_, { id }) => Promise.resolve(generalRequest(`${URL}/${id}`, 'DELETE')).then((value) => { return value}),

		createService: (_, { service }) => Promise.resolve(generalRequest(URLService, 'POST', service)).then((value) => { return value}),
		updateService: (_, { id, service }) => Promise.resolve(generalRequest(`${URLService}/${id}`, 'PUT', service)).then((value) => { return value}),
		deleteService: (_, { id }) => Promise.resolve(generalRequest(`${URLService}/${id}`, 'DELETE')).then((value) => { return value})
	}
};

