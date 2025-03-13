import { useState, useEffect } from "react"; 
import Typewriter from "react-typewriter-effect";
import SearchBar from "./components/SearchBar";
import CharacterList from "./components/CharacterList"; 
import personajes from "./data/personajes.json"; 
import "./styles.css";

export default function App() {
  //Almacena el termino a buscar
  const [searchTerm, setSearchTerm] = useState("");
  //Almacena los personajes filtrados
  const [filteredCharacters, setFilteredCharacters] = useState(personajes);
  //Manejo del estado de carga
  const [loading, setLoading] = useState(true);
  
  // Simulacion de carga de personajes (1seg)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  //Busqueda de personajes con filtro
  useEffect(() => {
    const filtered = personajes.filter((char) =>
      char.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(filtered);
  }, [searchTerm]);

  return (
    <div className="cards-container">
      <Typewriter //Efecto de escritura
        text="Galeria de personajes RDR2"
        cursorColor="White"
        textStyle={{fontSize: "2.5rem", fontWeight: "bold", textAling: "center" }}
        typeSpeed={70} // Velocidad de escritura
      />
            
      {/*Componente de barra de busqueda */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/*Muestra un mensaje de carga caundo se abre la pagina*/}
      {loading ? <p>Cargando personajes...</p> : <CharacterList characters={filteredCharacters} />}
    </div>
  );
}
