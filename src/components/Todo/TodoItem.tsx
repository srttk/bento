import React from 'react';

interface Todo {
    id:number
    description: string
    completed: boolean
    createdAt: string
}

const TodoItem:React.FC<{todo:Todo}> = ({ todo }) => {
    return (
        <div className="todo__item">
            { todo.description }
        </div>
    );
}

export default TodoItem;
