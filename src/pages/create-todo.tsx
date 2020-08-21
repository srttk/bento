import React, { useState, ChangeEvent } from 'react';
import { useMutation } from  '@/lib/gql-client';
import Layout from '@/components/Layout'
import TextInput from '@/components/ui/TextInput';
import Button from '@/components/ui/Button'

const ADD_TODO_MUTATION = `
mutation addTodo($description:String) {
    addTodo(description:$description) {
      id
      description
      completed
    }
  }
`

const CreateTodo = () => {

    const [state, setState] = useState({ description :""})

    const [{ data, loading }, addTodo] = useMutation(ADD_TODO_MUTATION)

    async function handleAddTodo() {
        
        let data = await addTodo(state)
        console.log(data)
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {

        const { name, value } = event.target

        setState((prevState) => ({...prevState, [name]: value}))
    }

    
    return (
        <Layout title="Create Todo">
            <div>
                <TextInput placeholder="Type something" name="description" value={state.description} type="text" onChange={handleChange} />
                <Button  disabled={loading} onClick={handleAddTodo}>
                    Add Todo
                </Button>
                
            </div>
        </Layout>
    );
}

export default CreateTodo;
