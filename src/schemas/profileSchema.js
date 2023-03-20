export const profileTypeDef = ` type profile {
    userID: String,
    fullname: String,
    gender: String,
    birthdate: String,
    nationality: String,
    degree: String,
    description: String,
    skills: [skillsSchema],
    schedule: [scheduleSchema],
    creationdate: String,
    profilestatus: Boolean
}

input profileInput {
    userID: String,
    fullname: String,
    gender: String,
    birthdate: String,
    nationality: String,
    degree: String,
    description: String,
    skills: [skillsSchemaInput],
    schedule: [scheduleSchemaInput],
    creationdate: String,
    profilestatus: Boolean
}

type skillsSchema {
    skillname: String,
    score: Float
}

input skillsSchemaInput {
    skillname: String,
    score: Float
}

type scheduleSchema {
    day: String,
    hours: String
}
input scheduleSchemaInput {
    day: String,
    hours: String
}

`


export const profileQueries = `

getProfile(id: String!): profile
allProfiles: [profile]
findProfiles(value: String!): [profile]

`


export const profileMutations = `

createProfile(profile: profileInput!): profile
updateProfile(profile: profileInput!): String

`