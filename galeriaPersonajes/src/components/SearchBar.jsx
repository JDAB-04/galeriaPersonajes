const SearchBar = ({ searchTerm, setSearchTerm }) => { // Define un componente con dos prpiedades una para buscar 
                                                       //y otra para actulizar luego de la busqueda
  return (
    <input
      type="text"
      placeholder="Buscar personaje..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}//Por cada palabra escrita se actualiza el estado con el valor buscado
      className="search-bar"
    />
  );
};

export default SearchBar;
