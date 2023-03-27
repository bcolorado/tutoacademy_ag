export const tutorServiceTypeDef = `
  type Aptitude {
      idRate: ID!
      service: tutorService!
      idQualifier: profile
      aptitudeName: String!
      aptitudeRate: Float!
      aptitudeState: Boolean!
  }

  type Service {
    idService: ID!
    idProfile: profile
    description: String!
    serviceState: Boolean!
  }

  input ServiceInput {
    idProfile: String
    description: String
    serviceState: Boolean
  }

  type tutorService{
    idService: ID!
    idProfile: profile
    description: String
    serviceState: Boolean
  }

  input AptitudeInput {
      service: serviceInput
      idQualifier: String
      aptitudeName: String
      aptitudeRate: Float
      aptitudeState: Boolean
  }

  input serviceInput{
    idService: ID!
    idProfile: String
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
    createAptitude(aptitude: AptitudeInput!): String
    updateAptitude(id: Int!, aptitude: AptitudeInput!): String
    deleteAptitude(id: Int!): String

    createService(service: ServiceInput!): String
    updateService(id: Int!, service: ServiceInput!): String
    deleteService(id: Int!): String
`;
