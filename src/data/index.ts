import { posts, Post } from "./posts";
import { users, User } from "./users";

export const data = {
    posts, users
}

export type Data = {
    posts: Array<Post>,
    users: Array<User>
}

export type Context = {
    localData: Data
}