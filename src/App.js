import React from 'react';
import TodoForm from './NoteForm';
import TodoList from './NoteList';
import Footer from './Footer';

const App = () => ( 
  <div className="App">
    <TodoForm />
    <TodoList />
    <Footer />
  </div>
);


export default App;