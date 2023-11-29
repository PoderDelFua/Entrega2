import React from 'react';

function Note({ note, toggleComplete, deleteTask }) {
  return (
    <div className="note mb-3 p-3" style={{ border: '1px solid #ddd', borderRadius: '4px' }}>
      <h5 style={{ textDecoration: note.completed ? "line-through" : "none" }}>
        {note.title} {/* Muestra el título */}
      </h5>
      <p style={{ textDecoration: note.completed ? "line-through" : "none" }}>
        {note.content} {/* Muestra el contenido de la nota */}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <button onClick={() => toggleComplete(note.id)} className="btn btn-secondary mr-2">
          {note.completed ? "Desmarcar" : "Marcar como completada"}
        </button>
        <button onClick={() => deleteTask(note.id)} className="btn btn-danger">
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Note;
