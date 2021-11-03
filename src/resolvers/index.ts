import { users } from './../data/users'

export const resolvers = {
    Query: {
      users: () => users,
      user: (_: unknown, { id }: {id: string}) => users.find((user) => user.id === id) || null
    },
  };