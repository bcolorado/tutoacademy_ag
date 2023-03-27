export const meetschedTypeDef = `
  type Request {
      id:ID!
      user_req: profile!
      tutor: profile!
      message: String!
      created_at: String!
      scheduled_time: String!
      accepted: String!
  }
  input RequestInput {
      user_req: Int!
      tutor: Int!
      message: String!
      scheduled_time: String!
      accepted: String!
  }
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
}

  `;

export const meetschedQueries = `
      allRequests: [Request]!
      requestById(id: Int!): Request!
      allMeetings: [Meeting]!
      meetingById(id: Int!): Meeting!
      meetingsFromRequestById(request_id: Int!): [Meeting]!
  `;

export const meetschedMutations = `
    createRequest(request: RequestInput!): String!
    updateRequest(id: Int!, request: RequestInput!): String!
    deleteRequest(id: Int!): Int
    createMeeting(id: Int!, meeting: MeetingInput!): Meeting!
    updateMeeting(id: Int!, meeting: MeetingInput!): Meeting!
    deleteMeeting(id: Int!): Int
`;

