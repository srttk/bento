import React, { useState, useEffect } from 'react';
import { useMutation } from '@/lib/gql-client';

interface Todo {
  id: number;
  description: string;
  completed: boolean;
  createdAt: string;
}

const CHANGE_STATUS = `
    mutation changeStatus($id: ID, $completed: Boolean) {
        changeStatus(id:$id, completed: $completed) {
            id
            description
            completed
        }
    }
`;

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const [item, setItem] = useState<Todo | null>(null);

  useEffect(() => {
    setItem(todo);
  }, [todo]);

  const [{ loading }, changeStatus] = useMutation(CHANGE_STATUS);

  if (!item) return <div>Loding</div>;
  return (
    <div
      className={`todo__item ${
        item.completed === true ? 'todo__item--completed' : ''
      }`}
    >
      <div className="todo__item--text">{item.description}</div>

      <div className="todo__item--check">
        <input
          disabled={loading}
          type="checkbox"
          checked={item.completed}
          onChange={() => {
            changeStatus({ id: item.id, completed: !item.completed }).then(
              (data: any) => {
                setItem(data.changeStatus);
              }
            );
          }}
        />
      </div>
    </div>
  );
};

export default TodoItem;
