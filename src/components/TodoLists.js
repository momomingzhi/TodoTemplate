import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoLists=()=>{
    return(
        <div className='TodoList'>
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
        </div>
    );
};

export default TodoLists;