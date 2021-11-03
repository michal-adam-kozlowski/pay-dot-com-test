import { Post, posts } from './../data/posts';
import { User, users } from './../data/users'

export const resolvers = {
    Query: {
      users: () => users,
      user: (_: unknown, { id }: {id: string}) => users.find((user) => user.id === id) || null,
      posts: () => posts,
      post: (_: unknown, { id }: {id: string}) => posts.find((post) => post.id === id) || null
    },
    Post: {
        users (parent: Post) { return users.filter((user) => parent.users.includes(user.id))}
    },
    User: {
        posts (parent: User) { return posts.filter((post) => post.users.includes(parent.id))}
    }
  };