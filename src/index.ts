import { resolvers } from './resolvers'
import { ApolloServer } from 'apollo-server'
import { typeDefs } from './graphQLSchema';
import mongoose from 'mongoose'
import config from './config';

const server = new ApolloServer({ typeDefs, resolvers, context: async () => ({
    db: await mongoose.connect(config.DATABASE_URL)
})});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});