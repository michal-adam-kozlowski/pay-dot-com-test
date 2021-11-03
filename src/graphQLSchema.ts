import { gql } from 'apollo-server'

export const typeDefs = gql`

  type User {
        id: ID!
        name: String
        surname: String
    }

  type Query {
    users: [User],
    user(id: ID!): User
  }
`;