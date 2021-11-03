import { users } from './../data/users'

export const resolvers = {
    Query: {
      users: () => users,
      user: (_: unknown, { name }: {name: string}) => users.find((user) => user.name === name) || null
    },
  };