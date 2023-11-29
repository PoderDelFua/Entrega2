import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import ToDoList from './Components/NoteList';
import NoteEditor from './Components/NoteEditor';
import SearchBar from './Components/Buscador'; 
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const listaRef = useRef();
  const [searchTerm, setSearchTerm] = useState(''); 
  const [listaElementos, setListaElementos] = useState(() => {
    const savedNotes = localStorage.getItem('notas');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem('notas', JSON.stringify(listaElementos));
  }, [listaElementos]);

  // Función para añadir notas
  const addNote = (title, content) => {
    const newNote = {
      id: uuidv4(),
      title: title, // Nuevo campo para el título
      content: content, // Nuevo campo para el contenido
      completed: false
    };
    setListaElementos([...listaElementos, newNote]);
  };
  

  // Función para marcar notas como completadas
  const toggleComplete = (id) => {
    setListaElementos(prevList => prevList.map(item => ({
      ...item,
      completed: item.id === id ? !item.completed : item.completed
    })));
  };

  // Función para eliminar notas
  const deleteTask = (id) => {
    setListaElementos(prevList => prevList.filter(item => item.id !== id));
  };

  // Filtrar notas basadas en el término de búsqueda
  const filteredNotes = listaElementos.filter(note => {
    const titleMatch = note.title && note.title.toLowerCase().includes(searchTerm.toLowerCase());
    const contentMatch = note.content && note.content.toLowerCase().includes(searchTerm.toLowerCase());
    return titleMatch || contentMatch; // Cambio para buscar en ambos campos
  });

  return (
    <div className="App container">
    <h1 className="my-4">Aplicación de Notas</h1> {"Tu buscador personalizado"}
    <SearchBar setSearchTerm={setSearchTerm} /> {}
    <h2 className="my-4">Añade una tarea</h2>
      <NoteEditor addNote={addNote} />
      <ToDoList
        elementos={filteredNotes} // Pasar las notas filtradas al ToDoList
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
