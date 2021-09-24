import './css/App.css'
import Home from './components/Home'
import Rules from './components/Rules'
import CharacterSelect from './components/CharacterSelect'
import CharacterDetails from './components/CharacterDetails'
import AddOnePokemon from './components/AddOnePokemon'
import EditPokemon from './components/EditPokemon'
import WinnerInfo from './components/WinnerInfo'
import {Route} from 'react-router-dom'

console.log(process.env.REACT_APP_AIRTABLE_KEY)
console.log(process.env.REACT_APP_AIRTABLE_BASE)

function App() {
  return (
    <div className='App'>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/allpokemon'>
          <CharacterSelect />
      </Route>
      <Route path='/allpokemon/:id'>
          <CharacterDetails />
      </Route>
      <Route path='/new'>
          <AddOnePokemon />
      </Route>
      <Route path='/allpokemon/:id/edit'>
          <EditPokemon />
      </Route>
      <Route exact path='/rules'>
        <Rules />
      </Route>
      <Route exact path='/winnerinfo'>
        <WinnerInfo />
      </Route>
    </div>
  );
}

export default App;
