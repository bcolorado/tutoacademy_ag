export const requestTypeDef = `
  type Request {
      id:ID!
      user_req: String!
      tutor: String!
      message: String!
      created_at: String!
      scheduled_time: String!
      accepted: String!
  }
  input RequestInput {
      user_req: String!
      tutor: String!
      message: String!
      scheduled_time: String!
      accepted: String!
  }`;

export const requestQueries = `
      allRequests: [Request]!
      requestById(id: Int!): Request!
  `;

export const requestMutations = `
    createRequest(request: RequestInput!): Request!
    updateRequest(id: Int!, request: RequestInput!): Request!
    deleteRequest(id: Int!): Int
`;

export const meetingTypeDef = `
  type Meeting {
      id:ID!
      request_id: Int!
      created_at: String!
      link: String!
      state: String!
  }
  input MeetingInput {
      link: String!
      state: String!
  }`;

export const meetingQueries = `
      allMeetings: [Meeting]!
      meetingById(id: Int!): Meeting!
      meetingsFromRequestById(request_id: Int!): [Meeting]!
  `;

export const meetingMutations = `
    createMeeting(id: Int!, meeting: MeetingInput!): Meeting!
    updateMeeting(id: Int!, meeting: MeetingInput!): Meeting!
    deleteMeeting(id: Int!): Int
`;
