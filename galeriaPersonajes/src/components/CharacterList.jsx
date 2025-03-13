import Card from "./cards";
import Typewriter from "react-typewriter-effect";

const CharacterList = ({ characters }) => { //Define una propiedad con el array de los personajes
  return (
    <div className="character-list">
      {characters.length > 0 ? ( //Si el array es mayor a 0 muestra cada personaje y recorre el aray con .map
        characters.map((char) => <Card key={char.id} character={char} />)
      ):(
        <Typewriter //Si el personaje buscado no existe muestra el mensaje
        text="El personaje no existe en los registros..."
        cursorColor="White"
        textStyle={{fontSize: "30px", textAling: "center" }}
        typeSpeed={70} // Velocidad de escritura
      />
      )}
    </div>
  );
};

export default CharacterList;
