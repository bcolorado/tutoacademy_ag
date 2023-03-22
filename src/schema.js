import { makeExecutableSchema } from 'graphql-tools';
import {resolvers} from "./resolvers"
import {profileTypeDef,profileQueries,profileMutations} from "./schemas/profileSchema"
import {chatQueries,chatMutations, chatTypeDef} from "./schemas/chatSchema"
import {userQueries, userMutations, userTypeDef} from "./schemas/userSchema"
import {aptitudeQueries, aptitudeMutations, aptitudeTypeDef} from "./schemas/aptitudeSchema"
import {serviceQueries, serviceMutations, serviceTypeDef} from "./schemas/serviceSchema"
import {requestQueries, requestMutations, requestTypeDef, meetingQueries, meetingMutations, meetingTypeDef} from "./schemas/meetschedSchema"
const typeDefs = profileTypeDef;
import { mergeSchemas } from '../utilities/utilities';


// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		profileTypeDef, chatTypeDef, userTypeDef, aptitudeTypeDef, serviceTypeDef, requestTypeDef, meetingTypeDef
	],
	[
		profileQueries, chatQueries, userQueries, aptitudeQueries, serviceQueries, requestQueries, meetingQueries
	],
	[
		profileMutations, chatMutations, userMutations, aptitudeMutations, serviceMutations, requestMutations, meetingMutations
	],
	
);


export default makeExecutableSchema({ typeDefs:mergedTypeDefs, resolvers:resolvers });


