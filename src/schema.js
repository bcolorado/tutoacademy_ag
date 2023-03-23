import { makeExecutableSchema } from 'graphql-tools';
import {resolvers} from "./resolvers"
import {profileTypeDef,profileQueries,profileMutations} from "./schemas/profileSchema"
import {chatQueries,chatMutations, chatTypeDef} from "./schemas/chatSchema"
import {userQueries, userMutations, userTypeDef} from "./schemas/userSchema"
import {tutorServiceQueries, tutorServiceMutations, tutorServiceTypeDef} from "./schemas/tutorServiceSchema"
import {meetschedTypeDef, meetschedQueries, meetschedMutations} from "./schemas/meetschedSchema"

const typeDefs = profileTypeDef;
import { mergeSchemas } from '../utilities/utilities';


// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		profileTypeDef, chatTypeDef, userTypeDef, tutorServiceTypeDef, meetschedTypeDef
	],
	[
		profileQueries, chatQueries, userQueries, tutorServiceQueries, meetschedQueries
	],
	[
		profileMutations, chatMutations, userMutations, tutorServiceMutations, meetschedMutations
	],
	
);


export default makeExecutableSchema({ typeDefs:mergedTypeDefs, resolvers:resolvers });


