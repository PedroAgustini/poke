import './App.css'
import Home from './Components/Home'
import Pokemon from './Components/Pokemon'
import PokemonStatistics from './Components/PokemonStatistics'
import { HashRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>}/>
            <Route path="/pokemon" element={<Pokemon/>}/>
            <Route path="/pokemon/:id" element={<PokemonStatistics/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
