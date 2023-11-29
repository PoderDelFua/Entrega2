// NoteList.jsx
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Note from './Note'; 

function NoteList({ elementos, toggleComplete, deleteTask }) {
  return (
    <ListGroup className="w-100">
      {elementos.map(item => (
        <Note 
          key={item.id} 
          note={item} 
          toggleComplete={toggleComplete} 
          deleteTask={deleteTask}
        />
      ))}
    </ListGroup>
  );
}

export default NoteList;
