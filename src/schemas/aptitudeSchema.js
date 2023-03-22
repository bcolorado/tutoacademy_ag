export const aptitudeTypeDef = `
  type Aptitude {
      idRate: ID!
      service: tutorService!
      idQualifier: ID!
      aptitudeName: String!
      aptitudeRate: Float!
      aptitudeState: Boolean!
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

export const aptitudeQueries = `
      allAptitudes: [Aptitude]
      aptitudeById(id: Int!): Aptitude
  `;

export const aptitudeMutations = `
    createAptitude(aptitude: AptitudeInput!): Aptitude
    updateAptitude(id: Int!, aptitude: AptitudeInput!): Aptitude
    deleteAptitude(id: Int!): String
`;
