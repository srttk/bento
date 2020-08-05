import { ApolloServer } from 'apollo-server-micro'
import { schema } from '../../graphql'

const graphqlServer = new ApolloServer({
    schema
})

const handler = graphqlServer.createHandler({
    path:'/api/graphql'
})

export const config = {
    api: {
        bodyParser: false
    }
}

export default handler