import mongoose from 'mongoose';
import { Post } from '../modelTypes/post';
import { User } from '../modelTypes/user';
import { userSchema } from '../mongooseSchema/user';
import { postSchema } from '../mongooseSchema/post';

type Context = { db: typeof mongoose };

export const resolvers = {
  Query: {
    users: (_: never, __: never, { db }: Context) => db.model('users', userSchema).find({}).exec(),
    user: (_: never, { id }: { id: string }, { db }: Context) =>
      db.model('user', userSchema).findOne({ id }).exec(),
    posts: (_: never, __: never, { db }: Context) => db.model('posts', postSchema).find({}).exec(),
    post: (_: never, { id }: { id: string }, { db }: Context) =>
      db.model('post', postSchema).findOne({ id }).exec(),
  },
  Post: {
    users: (parent: Post, _: never, { db }: Context) =>
      db.model('users', userSchema).find({ id: parent.users }).exec(),
  },
  User: {
    posts: (parent: User, _: never, { db }: Context) =>
      db
        .model('posts', postSchema)
        .find({})
        .exec()
        .then((res: Array<Post>) => res.filter((post) => post.users.includes(parent.id))),
  },
};
