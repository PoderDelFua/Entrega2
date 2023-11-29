import React, { useState, useRef } from 'react';

function NoteEditor({ addNote }) {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const tituloRef = useRef();
  const contenidoRef = useRef();

  const handleTitleChange = (e) => {
    setTitulo(e.target.value);
  };

  const handleContentChange = (e) => {
    setContenido(e.target.value);
  };

  const handleSubmit = () => {
    if (titulo.trim() !== "" && contenido.trim() !== "") {
      addNote(titulo, contenido);
      setTitulo(""); // Limpia el campo del título después de añadir la nota
      setContenido(""); // Limpia el campo del contenido después de añadir la nota
      tituloRef.current.focus(); // Vuelve a enfocar el campo del título
    }
  };

  return (
    <div className="note-editor mb-3 p5">
      <input 
        ref={tituloRef} 
        type="text" 
        placeholder="Título de la nota" 
        value={titulo} 
        onChange={handleTitleChange} 
        className="form-control mb-2"
      />
      <textarea 
        ref={contenidoRef} 
        placeholder="Contenido de la nota" 
        value={contenido} 
        onChange={handleContentChange} 
        className="form-control mb-2"
      />
      <button onClick={handleSubmit} className="btn btn-primary">
        Guardar Nota
      </button>
    </div>
  );
}

export default NoteEditor;
