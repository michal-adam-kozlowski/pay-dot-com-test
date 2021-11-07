import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import { typeDefs } from '../graphQLSchema';
import { resolvers } from '../resolvers';
import { usersQueriesMockup } from './mockups/usersQueriesMockup';
import config from '../config';

describe('Users API test', () => {
  let server: ApolloServer;
  beforeAll(() => {
    server = new ApolloServer({
      typeDefs,
      resolvers,
      context: async () => ({
        db: await mongoose.connect(config.DATABASE_URL),
      }),
    });
  });
  afterAll((done) => {
    mongoose.connection.close();
    done();
  });
  describe('single user', () => {
    it('should get single user', async () => {
      const result = await server.executeOperation({
        query: usersQueriesMockup.GET_SINGLE_USER,
      });
      const user = result.data?.user;

      expect(result.errors).toBeUndefined();
      expect(user.name).toBe('Johnny');
      expect(user.users).toBeUndefined();
    });
    it('should get single user with posts', async () => {
      const result = await server.executeOperation({
        query: usersQueriesMockup.GET_SINGLE_USER_WITH_POSTS,
      });
      const user = result.data?.user;

      expect(result.errors).toBeUndefined();
      expect(user.name).toBe('Thomas');
      expect(user.posts.length).toBe(2);
      expect(user.posts[0].name).toBe('The Expanse');
    });
    it('should return null if can not find user', async () => {
      const result = await server.executeOperation({
        query: usersQueriesMockup.GET_USER_FAILD,
      });

      expect(result.data?.user).toBe(null);
    });
  });
  describe('get all users', () => {
    it('should get all users', async () => {
      const result = await server.executeOperation({
        query: usersQueriesMockup.GET_USERS,
      });
      const users = result.data?.users;

      expect(result.errors).toBeUndefined();
      expect(users.length).toBe(2);
      expect(users[0].posts).toBeUndefined();
    });
    it('should get users with posts with users', async () => {
      const result = await server.executeOperation({
        query: usersQueriesMockup.GET_USERS_WITH_POSTS_WITH_USERS,
      });
      const users = result.data?.users;

      expect(result.errors).toBeUndefined();
      expect(users.length).toBe(2);
      expect(users[0].posts.length).toBe(2);
      expect(users[0].posts[0].name).toBe('Star Wars');
    });
  });
});
