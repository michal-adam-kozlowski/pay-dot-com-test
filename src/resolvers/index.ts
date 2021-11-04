import { Post } from './../data/posts';
import { User } from './../data/users';
import { Context } from './../data';

export const resolvers = {
    Query: {
      users: (_: never, __: never, { localData }: Context) => localData.users,
      user: (_: never, { id }: {id: string}, { localData }: Context) => localData.users.find((user) => user.id === id) || Promise.reject,
      posts: (_: never, __: never, { localData }: Context) => localData.posts,
      post: (_: never, { id }: {id: string}, { localData }: Context) => localData.posts.find((post) => post.id === id) || Promise.reject
    },
    Post: {
        users (parent: Post, _: never, { localData }: Context) { return localData.users.filter((user) => parent.users.includes(user.id))}
    },
    User: {
        posts (parent: User, _: never, { localData }: Context) { return localData.posts.filter((post) => post.users.includes(parent.id))}
    },
  };