const CharacterCard = ({ character }) => { //Define un componente que recibe los personajes del array
  return (
    <div className="card">
      <img src={character.image} alt={character.name} /> {/*Crea el personaje dentro de una tarjeta con el nombre y la iamgen*/}
      <h3>{character.name}</h3>
    </div>
  );
};

export default CharacterCard;
