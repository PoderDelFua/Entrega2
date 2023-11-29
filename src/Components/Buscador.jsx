// Buscador.js
import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

function Buscador({ setSearchTerm }) {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Buscar nota..."
        onChange={handleSearch}
      />
    </InputGroup>
  );
}

export default Buscador;
