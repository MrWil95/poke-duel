import './App.css'
import Nav from './components/Nav'
import CharacterSelect from './components/CharacterSelect'
import CharacterDetails from './components/CharacterDetails'
import AddPokémon from './components/AddPokémon'
import EditPokemon from './components/EditPokemon'
import {Route, Link} from 'react-router-dom'

console.log(process.env.REACT_APP_AIRTABLE_KEY)
console.log(process.env.REACT_APP_AIRTABLE_BASE)

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <Link to='/'>
          <h1>Poké Duel</h1>
        </Link>
      </div>
      <Nav />
      <Route path='/'></Route>
      <Route exact path='/pokemon'>
        <CharacterSelect />
      </Route>
      <Route path='/pokemon/:id'>
        <CharacterDetails />
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
