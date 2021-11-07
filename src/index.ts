import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import { resolvers } from './resolvers';
import { typeDefs } from './graphQLSchema';
import config from './config';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => ({
    db: await mongoose.connect(config.DATABASE_URL),
  }),
});

server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀  Server ready at ${url}`);
});
