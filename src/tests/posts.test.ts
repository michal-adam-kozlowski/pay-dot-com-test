import { ApolloServer } from 'apollo-server';
import { typeDefs } from '../graphQLSchema';
import { resolvers } from '../resolvers'
import { data } from '../data/index';
import { postsQueriesMockup } from './mockups/postsQueriesMockup';

const server = new ApolloServer({ typeDefs, resolvers, context: () => ({
    localData: data
})});

describe('Posts API test', ()=> {
    describe('single post', ()=> {
        it('should get single post', async ()=> {
            const result = await server.executeOperation({
                query: postsQueriesMockup.GET_SINGLE_POST
            })
            const post = result.data?.post;

            expect(result.errors).toBeUndefined();
            expect(post.name).toBe('Star Wars');
            expect(post.users).toBeUndefined();
        });
        it('should get single post with users', async ()=> {
            const result = await server.executeOperation({
                query: postsQueriesMockup.GET_SINGLE_POST_WITH_USERS
            })
            const post = result.data?.post

            expect(result.errors).toBeUndefined();
            expect(post.name).toBe('The Expanse');
            expect(post.users.length).toBe(2);
            expect(post.users[0].name).toBe("Johnny");
        });
        it('should throw error if can not find post', async ()=> {
            const result = await server.executeOperation({
                query: postsQueriesMockup.GET_POST_FAILD
            })

            expect(result.errors).toBeDefined();
        })
    });
    describe('get all posts', () => {
        it('should get all posts', async () => {
            const result = await server.executeOperation({
                query: postsQueriesMockup.GET_POSTS
            })
            const posts = result.data?.posts;

            expect(result.errors).toBeUndefined();
            expect(posts.length).toBe(3);
            expect(posts[0].users).toBeUndefined();
        });
        it('should get posts with users', async ()=> {
            const result = await server.executeOperation({
                query: postsQueriesMockup.GET_POSTS_WITH_USERS
            })
            const posts = result.data?.posts

            expect(result.errors).toBeUndefined();
            expect(posts.length).toBe(3);
            expect(posts[0].users.length).toBe(1);
            expect(posts[0].users[0].name).toBe("Johnny");
        });
    });
})

