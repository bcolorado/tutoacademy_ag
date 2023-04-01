import { generalRequest } from '../../utilities/utilities';
import { URLtutorservice, URLprofile} from '../server';

const URL = `${URLtutorservice}/rates`;

const URLService = `${URLtutorservice}/services`;

export const tutorServiceResolver = {
	Query: {
		allAptitudes: () => Promise.resolve(generalRequest(URL, 'GET')).then((value) => {  return value}),
		aptitudeById: (_, { id }) => Promise.resolve(generalRequest(`${URL}/${id}`, 'GET')).then((value) => { return value}),

		allServices: () => Promise.resolve(generalRequest(URLService, 'GET')).then((value) => {  return value}),
		serviceById: (_, { id }) => Promise.resolve(generalRequest(`${URLService}/${id}`, 'GET')).then((value) => {  return value})

	},
	Aptitude:{
        idQualifier:({idQualifier}) => {return Promise.resolve(generalRequest(`${URLprofile}/profile/get/${idQualifier}`, '')).then((value) => {  return value.profiles})},         
       },

	Service:{
        idProfile:({idProfile}) => {return Promise.resolve(generalRequest(`${URLprofile}/profile/get/${idProfile}`, '')).then((value) => {  return value.profiles})},         
       },
	tutorService:{
		idProfile:({idProfile}) => {return Promise.resolve(generalRequest(`${URLprofile}/profile/get/${idProfile}`, '')).then((value) => {  return value.profiles})}
	},
	Mutation: {
		
		createAptitude: (_, { aptitude }) => { 
            return (async () => {
                // querys conditions definition
                let idQualifier = await generalRequest(`${URLprofile}/profile/get/${aptitude.idQualifier}`, '').then((value) => {return value});
                // conditions
				if(idQualifier.profiles==null){return "IdProfile provided is not valid"} else{
					return Promise.resolve(generalRequest(URL, 'POST', aptitude)).then((value) => { return "Request done successfully "})}
                
              })()
        }, 
		updateAptitude: (_, {id, aptitude }) => { 
            return (async () => {
                // querys conditions definition
				if (aptitude.idQualifier!=null){
					let idQualifier = await generalRequest(`${URLprofile}/profile/get/${aptitude.idQualifier}`, '').then((value) => {return value});

					if(idQualifier.profiles==null){return "IdProfile provided is not valid"} else{
						return  Promise.resolve(generalRequest(`${URL}/${id}`, 'PUT', aptitude)).then((value) => { return "Request done successfully "})}

				} else {
					return  Promise.resolve(generalRequest(`${URL}/${id}`, 'PUT', aptitude)).then((value) => { return "Request done successfully "})
				}
                
              })()
        }, 
		deleteAptitude: (_, { id }) => Promise.resolve(generalRequest(`${URL}/${id}`, 'DELETE')).then((value) => { return value}),


		createService: (_, { service }) => { 
            return (async () => {
                // querys conditions definition
                let idProfile = await generalRequest(`${URLprofile}/profile/get/${service.idProfile}`, '').then((value) => {return value});
                // conditions
				if(idProfile.profiles==null){return "IdProfile provided is not valid"} else{
					return Promise.resolve(generalRequest(URLService, 'POST', service)).then((value) => { return "Request done successfully "})}
                
              })()
        }, 
		updateService: (_, {id, service }) => { 
            return (async () => {
                // querys conditions definition
				if (service.idProfile!=null){
					let idProfile = await generalRequest(`${URLprofile}/profile/get/${service.idProfile}`, '').then((value) => {return value});

					if(idProfile.profiles==null){return "IdProfile provided is not valid"} else{
						return  Promise.resolve(generalRequest(`${URLService}/${id}`, 'PUT', service)).then((value) => { return "Request done successfully "})}

				} else {
					return  Promise.resolve(generalRequest(`${URLService}/${id}`, 'PUT', service)).then((value) => { return "Request done successfully "})
				}
                
              })()
        }, 

		deleteService: (_, { id }) => Promise.resolve(generalRequest(`${URLService}/${id}`, 'DELETE')).then((value) => { return value})
	}
};

