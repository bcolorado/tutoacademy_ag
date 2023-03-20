import { generalRequest, getRequest } from '../utilities/utilities';
import {profileResolvers} from './resolvers/profileResolver'
import {chatResolvers} from './resolvers/chatResolver'
import merge from 'lodash.merge';

export const resolvers= merge(
    profileResolvers, chatResolvers
)