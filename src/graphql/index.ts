import { makeExecutableSchema } from 'apollo-server-micro'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

