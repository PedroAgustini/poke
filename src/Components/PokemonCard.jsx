import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ Url }) => {
  const [characterInfo, setCharacterInfo] = useState({});
  useEffect(() => {
    axios.get(Url)
    .then((res) => setCharacterInfo(res.data));
  }, []);
  const species = () => {
    if (characterInfo.types?.[0].type.name === "fire") {
      return "fire"
    } else if (characterInfo.types?.[0].type.name === "normal") {
      return "normal"
    } else if (characterInfo.types?.[0].type.name === "poison") {
      return "poison"
    } else if (characterInfo.types?.[0].type.name === "grass") {
      return "grass"
    } else if (characterInfo.types?.[0].type.name === "flying") {
      return "flying"
    } else if (characterInfo.types?.[0].type.name === "bug") {
      return "bug"
    } else if (characterInfo.types?.[0].type.name === "water") {
      return "water"
    } 
  }
  const navigate = useNavigate()
  return (
    <div className={`card ${species()}`} onClick={() => navigate(`/pokemon/${characterInfo.id}`)}>
      <div className="card-img">
        <img src={characterInfo.sprites?.front_default} alt="" />
      </div>
      <div className="card-info">
        <div className="card-name">
          <p className={`p-medium bold`}>{characterInfo.name?.replace(characterInfo.name[0], characterInfo.name[0].toUpperCase())}</p>
        </div>
        <div className="card-type">
          <p className="p-small">Tipo</p>
          <div className="type-flex">
            {
              characterInfo.types?.map((character) => (
                <div>
                  <p key={character.url} className={`p-small`}>{character.type.name.replace(character.type.name[0], character.type.name[0].toUpperCase())}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="card-info-flex padding-05rem">
          <div className="card-hp">
            <p className="p-small bold">HP</p>
            <p>{characterInfo.stats?.[0].base_stat}</p>
          </div>
          <div className="card-attack">
            <p className="p-small bold">ATAQUE</p>
            <p>{characterInfo.stats?.[1].base_stat}</p>
          </div>
        </div>
        <div className="card-info-flex padding-top03rem">
          <div className="card-defense">
            <p className="p-small bold">DEFENSA</p>
            <p>{characterInfo.stats?.[2].base_stat}</p>
          </div>
          <div className="card-speed">
          <p className="p-small bold">VELOCIDAD</p>
          <p>{characterInfo.stats?.[5].base_stat}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PokemonCard;
