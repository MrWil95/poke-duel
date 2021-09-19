import './css/App.css'
import Home from './components/Home'
import Ruels from './components/Ruels'
import CharacterSelect from './components/CharacterSelect'
import CharacterDetails from './components/CharacterDetails'
import AddPokémon from './components/AddPokémon'
import EditPokemon from './components/EditPokemon'
import {Route} from 'react-router-dom'

console.log(process.env.REACT_APP_AIRTABLE_KEY)
console.log(process.env.REACT_APP_AIRTABLE_BASE)

function App() {
  return (
    <div className='App'>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/pokemonlists'>
          <CharacterSelect />
      </Route>
      <Route path='/pokemonlistst/:id'>
          <CharacterDetails />
      </Route>
      <Route path='/new'>
          <AddPokémon />
      </Route>
      <Route path='/pokemonlists/:id/edit'>
          <EditPokemon />
      </Route>
      <Route exact path='/ruels'>
        <Ruels />
      </Route>
    </div>
  );
}

export default App;
