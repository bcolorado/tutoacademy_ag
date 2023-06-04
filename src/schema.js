import { makeExecutableSchema } from 'graphql-tools';
import {resolvers} from "./resolvers"
import {profileTypeDef,profileQueries,profileMutations} from "./schemas/profileSchema"
import {chatQueries,chatMutations, chatTypeDef} from "./schemas/chatSchema"
import {userQueries, userMutations, userTypeDef} from "./schemas/userSchema"
import {tutorServiceQueries, tutorServiceMutations, tutorServiceTypeDef} from "./schemas/tutorServiceSchema"
import {meetschedTypeDef, meetschedQueries, meetschedMutations} from "./schemas/meetschedSchema"

const typeDefs = profileTypeDef;
import { mergeSchemas } from '../utilities/utilities';
import { sourcelambdaQueries, sourcelambdaTypeDef } from './schemas/sourcelambdaSchema';


// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		profileTypeDef, chatTypeDef, userTypeDef, tutorServiceTypeDef, meetschedTypeDef, sourcelambdaTypeDef
	],
	[
		profileQueries, chatQueries, userQueries, tutorServiceQueries, meetschedQueries, sourcelambdaQueries
	],
	[
		profileMutations, chatMutations, userMutations, tutorServiceMutations, meetschedMutations
	],
	
);


export default makeExecutableSchema({ typeDefs:mergedTypeDefs, resolvers:resolvers });


