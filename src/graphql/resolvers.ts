import db from '@/lib/db'
export default {
    Query: {
        hello: () => "React GraphQL Starter using Next.js and Apollo",
        todos: async () => {
            const todos = await db.todo.findMany()
            return todos
        } 
    },
    Mutation: {
        async addTodo(parent, args, context, info) {
            
            const { description } = args

            let todo  = await db.todo.create({ data: { description} })

            return todo
        }
    }
}

