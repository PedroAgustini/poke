import Header from "./Images/header.png"
import axios from "axios"
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import inputSearch from "../store/slices/inputSearch";




const Pokemon = () => {
    const [characters, setCharacters] = useState([])
    const [ types, setTypes ] =useState([]);
    const [ item, setItem ] = useState([])
    const [ inputSearch, setInputSearch] = useState([])
    

    useEffect(() => {
      axios
            .get(`https://pokeapi.co/api/v2/pokemon/?offsset=0&limit=1154`)
            .then((res) => setCharacters(res.data.results))

      axios
            .get("https://pokeapi.co/api/v2/type")
            .then((res) => setTypes(res.data.results));
    },[])

    const typePokemon = (e) => {
      alert(e.target.value)
      axios.get(e.target.value)
      .then((res) => setTypes(res.data.pokemon))
      navigate(`/pokemon/${types}`)
}

    

    const welcome = useSelector((state) => state.input)
    const changeInput = useSelector((state) => state.change)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const search = (e) => {
      e.preventDefault()
      if(inputSearch) {
        navigate(`/pokemon/${inputSearch.toLowerCase()}`)
      } else {
        alert("Error")
      }
    }
    

    const [ page, setPage ] = useState(1);
    const lastIndex = page * 20
    const firstIndex = lastIndex - 20
    const pokemonsPaginated = characters.slice(firstIndex, lastIndex)

    const lastPage = Math.ceil(characters.length / 20)

    const numbers = [];
    for(let i = 1; i <= lastPage; i++){
      numbers.push(i)
    }

    return (
      <div className="pokemon">
        <div className="pokemon-container">
          <div className="pokemon-header">
            <img src={Header} alt="" />
          </div>
          <div className="pokemon-greeting text-align-center margin-btm1rem">
            <p className="margin-btm1rem">
              <span className="greeting bold p-medium">
                Bienvenido {welcome}
              </span>
            </p>
            <p>aqu?? podr??s encontrar tu pokem??n favorito</p>
          </div>
          <div className="pokemon-input width-90 text-align-center">
            
              <>
                <form action="" className="margin-btm1rem" onSubmit={typePokemon}>
                  <select onChange={typePokemon} id="search-category">
                    <option value="">Seleccione el tipo de pokemon</option>
                    {types.map((type) => (
                      <option value={type.url} key={type.url}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                </form>
              </>
            
              <>
                <form action="" className="margin-btm1rem" onSubmit={search}>
                  <input
                    type="text"
                    placeholder="Busca un pokemon"
                    className="input-name"
                    value={inputSearch} onChange={(e) => setInputSearch(e.target.value)}                
                  />
                  <button type="submit" className="btn-submit">
                    Buscar
                  </button>
                </form>
              </>
            
            
            <div className="container-pagination">
              <div>
                <button
                  className="btn-pagination"
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                >
                  Prev page
                </button>
              </div>
              <div>
                <button
                  className="btn-pagination"
                  onClick={() => setPage(page + 1)}
                  disabled={page === lastPage}
                >
                  Next page{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="pokemon-card">
            <div className="card-flex">
              {pokemonsPaginated.map((character) => (
                <PokemonCard
                  Url={character.url ? character.url : character.pokemon.url}
                  key={character.url ? character.url : character.pokemon.url}
                />
              ))}
            </div>
          </div>
        </div>
            <div className="container-pagination">
              <div>
                <button
                  className="btn-pagination pagination-m-top"
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                >
                  Prev page
                </button>
              </div>
              <div>
                <button
                  className="btn-pagination pagination-m-top"
                  onClick={() => setPage(page + 1)}
                  disabled={page === lastPage}
                >
                  Next page{" "}
                </button>
              </div>
            </div>
      </div>
    );
};

export default Pokemon;


