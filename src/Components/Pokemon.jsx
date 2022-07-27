import Header from "./Images/header.png"
import axios from "axios"
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../store/slices/changeInput";

const Pokemon = () => {
    const [characters, setCharacters] = useState([])
    const [ types, setTypes ] =useState([]);

    useEffect(() => {
      axios
            .get(`https://pokeapi.co/api/v2/pokemon/`)
            .then((res) => setCharacters(res.data.results))

      axios
            .get("https://pokeapi.co/api/v2/type")
            .then((res) => setTypes(res.data.results));
    },[])

    const typePokemon = (e) => {
      axios.get(e.target.value)
      .then((res) => setCharacters(res.data))
}

    const welcome = useSelector((state) => state.input)
    const changeInput = useSelector((state) => state.change)
    const dispatch = useDispatch()
    console.log(changeInput)
    return (
        <div className="pokemon">
          <div className="pokemon-container">
            <div className="pokemon-header">
              <img src={Header} alt="" />
            </div>
            <div className="pokemon-greeting text-align-center margin-btm1rem">
              <p className="margin-btm1rem"><span className="greeting bold p-medium">Bienvenido {welcome}</span></p>
              <p>aquí podrás encontrar tu pokemón favorito</p>
            </div>
            <div className="pokemon-input width-90 text-align-center">
              {changeInput ? (
                <>
                  <form action="" className="margin-btm1rem">
                    <select onChange={typePokemon} id="search-category">
                      <option value="">Seleccione el tipo de pokemon</option>
                      {
                        types.map((type) => (
                          <option value={type.url} key={type.url}>
                          {type.name}
                          </option>
                        ))
                      }
                     </select>
                  </form>
                </>
              ) : (
                <>
                  <form action="" className="margin-btm1rem">
                    <input type="text" placeholder="Busca un pokemon" className="input-name"/>
                    <button type="submit" className="btn-submit">Buscar</button>
                  </form>
                </>
              )}
              <button type="button" className="margin-btm1rem" onClick={() => dispatch(change())}><i className="fa-solid fa-arrows-rotate icon-change"></i></button>
            </div>
            <div className="pokemon-card">
              <div className="card-flex">
                {
                  characters.map(character => (
                    <PokemonCard Url={character.url} key={character.url}/>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
    );
};

export default Pokemon;



<form action="" className="margin-btm1rem">
<input type="text" placeholder="Busca un pokemon" className="input-name"/>
<button type="submit" className="btn-submit">Buscar</button>
</form>