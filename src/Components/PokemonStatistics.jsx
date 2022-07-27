import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TitleImage from "./Images/Title-image.png";

const PokemonStatistics = () => {
  const [pokemon, setPokemon] = useState({})
  const { id } = useParams()
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => setPokemon(res.data))
  },[id])
  const background = () => {
    if(pokemon.types?.[0].type.name === "fire") {
      return "fire-bg"
    } else if (pokemon.types?.[0].type.name === "normal") {
      return "normal-bg"
    } else if (pokemon.types?.[0].type.name === "poison") {
      return "poison-bg"
    } else if (pokemon.types?.[0].type.name === "grass") {
      return "grass-bg"
    } else if (pokemon.types?.[0].type.name === "flying") {
      return "flying-bg"
    } else if (pokemon.types?.[0].type.name === "bug") {
      return "bug-bg"
    } else if (pokemon.types?.[0].type.name === "water") {
      return "water-bg"
    } 
  }

  const tags = () => {
    for(let i = 0; i < 3; i++) {
      if (pokemon.types?.[i].type.name === "fire") {
        return "fire-bg"
      } else if (pokemon.types?.[i].type.name === "normal") {
        return "normal-bg"
      } else if (pokemon.types?.[i].type.name === "poison") {
        return "poison-bg"
      } else if (pokemon.types?.[i].type.name === "grass") {
        return "grass-bg"
      } else if (pokemon.types?.[i].type.name === "flying") {
        return "flying-bg"
      } else if (pokemon.types?.[i].type.name === "bug") {
        return "bug-bg"
      } else if (pokemon.types?.[i].type.name === "water") {
        return "water-bg"
      } 
    }
  }
  console.log(pokemon)
  return (
    <div className="statistics">
      <div className="statistics-title">
        <img src={TitleImage} alt=""/>
      </div>
      <div className="statistics-container">
        <section className="stadistics-main">
          <div className="statistics-details">
            <div className="details-image">
              <img src={pokemon.sprites?.front_default} alt="image-pokemon"/>
            </div>
            <div className="details-flex-weight-height margin-btm1rem">
              <div className="details-weight">
                <p className="bold">Peso</p>
                <p className="color-red">{pokemon.weight}</p>
              </div>
              <div className="details-height">
                <p className="bold">Altura</p>
                <p className="color-red">{pokemon.height}</p>
              </div>
            </div>
            <div className="details-name text-align-center margin-btm1rem">
              <h2>{pokemon.name?.replace(pokemon.name[0], pokemon.name[0].toUpperCase())}</h2>
            </div>
            <div className="details-id text-align-center">
              <p className="color-red">#{pokemon.id}</p>
            </div>
          </div>
        </section>
        <div className="section-flex">
          <section className="type text-align-center">
            <div className="type-subtitle margin-btm1rem">
              <h2>Type</h2>
            </div>
            <div className="type-tags">
              {
                pokemon.types?.map((typess) => (
                  <p className="types-flex" key={typess.type.url}>{typess.type.name.replace(typess.type.name[0], typess.type.name[0].toUpperCase())}</p>
                ))
              }
            </div>
          </section>
          <section className="abilities text-align-center">
            <div className="abilities-subtitle margin-btm1rem">
              <h2>Abilities</h2>
            </div>
            <div className="abilities-pharagraph">
              <div className="abilities-flex">
                {
                  pokemon.abilities?.map((abilite) => (
                    <p key={abilite.ability.url} className="abilities-btn">{abilite.ability.name.replace(abilite.ability.name[0], abilite.ability.name[0].toUpperCase())}</p>
                  ))
                }
              </div>
            </div>
          </section>
          <section className="movements text-align-center">
            <div className="movement-subtitle">
              <h2 className="margin-btm1rem">Movements</h2>
            </div>
            <div className="movements-list">
              <div className="movements-flex">
                {
                  pokemon.moves?.map((movement) => (
                    <p key={movement.move.url}>{movement.move.name.replace(movement.move.name[0], movement.move.name[0].toUpperCase())}</p>
                  ))
                }
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PokemonStatistics;
