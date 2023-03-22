import { aptitudeTypeDef } from '../schemas/aptitudeSchema';
import { generalRequest } from '../../utilities/utilities';

const URL = 'http://localhost:8080/rates';

export const aptitudeResolvers = {
	Query: {
		allAptitudes: () => Promise.resolve(generalRequest(URL, 'GET')).then((value) => {  return value}),
		aptitudeById: (_, { id }) => Promise.resolve(generalRequest(`${URL}/${id}`, 'GET')).then((value) => { return value})
	},
	Mutation: {
		createAptitude: (_, { aptitude }) => Promise.resolve(generalRequest(URL, 'POST', aptitude)).then((value) => { return value}),
		updateAptitude: (_, { id, aptitude }) => Promise.resolve(generalRequest(`${URL}/${id}`, 'PUT', aptitude)).then((value) => { console.log(aptitude); return value}),
		deleteAptitude: (_, { id }) => Promise.resolve(generalRequest(`${URL}/${id}`, 'DELETE')).then((value) => { return value})
	}
};

