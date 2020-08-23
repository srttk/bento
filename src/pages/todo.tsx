import React, { useState, ChangeEvent } from 'react';
import { useMutation, useQuery } from '@/lib/gql-client';
import Layout from '@/components/Layout';
import TextInput from '@/components/ui/TextInput';
import Button from '@/components/ui/Button';
import TodoItem from '@/components/Todo/TodoItem';

const ADD_TODO_MUTATION = `
mutation addTodo($description:String) {
    addTodo(description:$description) {
      id
      description
      completed
    }
  }
`;

const GET_TODOS = `
{
    todos {
        id
        description
        completed
        createdAt
    }
}
`;

const CreateTodo = () => {
  const [state, setState] = useState({ description: '' });

  const [{ data: responseData, loading }, addTodo] = useMutation(
    ADD_TODO_MUTATION
  );

  const { data, loading: todosLoading, refresh } = useQuery(GET_TODOS);

  async function handleAddTodo() {
    let data = await addTodo(state);
    refresh();
    console.log(data);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <Layout title="Todo">
      <div>
        <TextInput
          placeholder="Type something"
          name="description"
          value={state.description}
          type="text"
          onChange={handleChange}
        />
        <Button disabled={loading} onClick={handleAddTodo}>
          Add Todo
        </Button>
      </div>
      {data && (
        <div className="space-y-2">
          {data.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default CreateTodo;
