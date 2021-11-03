import { users } from './../data/users'

export const resolvers = {
    Query: {
      users: () => users,
    },
  };