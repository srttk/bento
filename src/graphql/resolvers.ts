export default {
    Query: {
        hello: () => "React GraphQL Starter using Next.js and Apollo"
    },
    Mutation: {
        addTodo(parent, args, context, info) {
            
            const { description } = args
            return { id: Date.now(), description, completed: true}
        }
    }
}

