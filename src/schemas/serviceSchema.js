export const serviceTypeDef = `
  type Service {
      idService: ID!
      idProfile: ID!
      description: String!
      serviceState: Boolean!
  }
  input ServiceInput {
      idProfile: ID
      description: String
      serviceState: Boolean
  }`;

export const serviceQueries = `
      allServices: [Service]
      serviceById(id: Int!): Service
  `;

export const serviceMutations = `
    createService(service: ServiceInput!): Service
    updateService(id: Int!, service: ServiceInput!): Service
    deleteService(id: Int!): String
`;
