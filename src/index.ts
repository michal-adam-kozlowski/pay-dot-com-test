import { resolvers } from './resolvers'
import { ApolloServer } from 'apollo-server'
import { typeDefs } from './graphQLSchema';
import { data } from './data';

const server = new ApolloServer({ typeDefs, resolvers, context: () => ({
    localData: data
})});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});