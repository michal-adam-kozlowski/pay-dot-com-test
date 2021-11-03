import { gql } from 'apollo-server'

export const typeDefs = gql`

  type User {
        id: ID!
        name: String
        surname: String
        posts: [Post]
    }

    type Post {
        id: ID!
        name: String
        description: String
        users: [User]
    }

  type Query {
    users: [User],
    user(id: ID!): User
    posts: [Post],
    post(id: ID!): Post
  }

`;