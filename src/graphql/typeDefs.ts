import { gql } from 'apollo-server-micro';

export default gql`
type Query {
    hello: String
}

type Mutation {
    addTodo(description:String):Todo!
}

type Todo {
    id: ID
    description: String
    completed: Boolean
}
`