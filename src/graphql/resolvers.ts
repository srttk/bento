import db from '@/lib/db'
export default {
    Query: {
        hello: () => "React GraphQL Starter using Next.js and Apollo",
        todos: async () => {
            const todos = await db.todo.findMany({ orderBy:{ createdAt:"desc"}})
            return todos
        } 
    },
    Mutation: {
        async addTodo(parent, args, context, info) {
            
            const { description } = args

            let todo  = await db.todo.create({ data: { description} })

            return todo
        },

        async changeStatus(parent, args, context, info) {
            const { id, completed } = args
            const todo  = await db.todo.update({
                where:{ id: +id},
                data: { completed}
            })

            return todo
        },
        async deleteTodo(parent, args, context, info) {
            const { id } = args

         await db.todo.delete({where:{ id}})
        }
    }
}

