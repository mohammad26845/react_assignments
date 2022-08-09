import React from 'react'
import './App.css';
import { BooksList } from './BooksList';

function App() {
  return (
    <div>
      <div className='header'>
        <h2>
          Books list
        </h2>
      </div>
      
      <BooksList></BooksList>


    </div>

  );
}

export default App;
