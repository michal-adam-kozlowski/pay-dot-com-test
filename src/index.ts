import { resolvers } from './resolvers'
import { ApolloServer } from 'apollo-server'
import { typeDefs } from './graphQLSchema';

const server = new ApolloServer({ typeDefs, resolvers });


server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});