import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoLists'
const App = ()=>{
  return( <TodoTemplate>
            <TodoInsert />
            <TodoList />
          </TodoTemplate>
  );
};
export default App;
