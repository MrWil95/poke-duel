import './App.css'
import Nav from './components/Nav'
import AddPokémon from './components/AddPokémon'
import CharacterSelect from './components/CharacterSelect'
import Ruels from './components/Ruels'
import EditPokemon from './components/EditPokemon'
import Home from './components/Home'
import {Route} from 'react-router-dom'

console.log(process.env.REACT_APP_AIRTABLE_KEY)
console.log(process.env.REACT_APP_AIRTABLE_BASE)

function App() {
  return (
    <div className='App'>
      <Nav />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/pokemon'>
        <CharacterSelect />
      </Route>
      <Route path='/pokemon/:id'>
        <CharacterSelect />
      </Route>
      <Route to='/new'>
        <AddPokémon />
      </Route>
      <Route path='/pokemon/:id/edit'>
        <EditPokemon />
      </Route>
    </div>
  );
}

export default App;
