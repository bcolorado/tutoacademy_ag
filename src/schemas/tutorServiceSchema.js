export const tutorServiceTypeDef = `
  type Aptitude {
      idRate: ID!
      service: tutorService!
      idQualifier: ID!
      aptitudeName: String!
      aptitudeRate: Float!
      aptitudeState: Boolean!
  }

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
  }

  type tutorService{
    idService: ID!
    idProfile: ID
    description: String
    serviceState: Boolean
  }

  input AptitudeInput {
      service: serviceInput
      idQualifier: ID
      aptitudeName: String
      aptitudeRate: Float
      aptitudeState: Boolean
  }

  input serviceInput{
    idService: ID!
    idProfile: ID
    description: String
    serviceState: Boolean
  }`;

export const tutorServiceQueries = `
      allAptitudes: [Aptitude]
      aptitudeById(id: Int!): Aptitude

      allServices: [Service]
      serviceById(id: Int!): Service

  `;

export const tutorServiceMutations = `
    createAptitude(aptitude: AptitudeInput!): Aptitude
    updateAptitude(id: Int!, aptitude: AptitudeInput!): Aptitude
    deleteAptitude(id: Int!): String

    createService(service: ServiceInput!): Service
    updateService(id: Int!, service: ServiceInput!): Service
    deleteService(id: Int!): String
`;
