import { posts } from './../data/posts';
import { users } from './../data/users'

export const resolvers = {
    Query: {
      users: () => users,
      user: (_: unknown, { id }: {id: string}) => users.find((user) => user.id === id) || null,
      posts: () => posts,
      post: (_:unknown, { id }: {id: string}) => posts.find((post) => post.id === id) || null
    },
  };