import { gql } from 'apollo-server'

export const typeDefs = gql`

  type User {
    name: String
    surname: String
  }

  type Query {
    users: [User],
    user(name: String!): User
  }
`;