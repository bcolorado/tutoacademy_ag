import { makeExecutableSchema } from 'graphql-tools';
import {resolvers} from "./resolvers"
import {profileTypeDef,profileQueries,profileMutations} from "./schemas/profileSchema"
import {chatQueries,chatMutations, chatTypeDef} from "./schemas/chatSchema"
import {userQueries, userMutations, userTypeDef} from "./schemas/userSchema"
import {tutorServiceQueries, tutorServiceMutations, tutorServiceTypeDef} from "./schemas/tutorServiceSchema"

const typeDefs = profileTypeDef;
import { mergeSchemas } from '../utilities/utilities';


// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		profileTypeDef, chatTypeDef, userTypeDef, tutorServiceTypeDef
	],
	[
		profileQueries, chatQueries, userQueries, tutorServiceQueries
	],
	[
		profileMutations, chatMutations, userMutations, tutorServiceMutations
	],
	
);


export default makeExecutableSchema({ typeDefs:mergedTypeDefs, resolvers:resolvers });


