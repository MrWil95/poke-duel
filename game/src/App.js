import './css/App.css'
import Home from './components/Home'
import Ruels from './components/Ruels'
import CharacterSelect from './components/CharacterSelect'
import {Route} from 'react-router-dom'

console.log(process.env.REACT_APP_AIRTABLE_KEY)
console.log(process.env.REACT_APP_AIRTABLE_BASE)

function App() {
  return (
    <div className='App'>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/pokemonlists'>
          <CharacterSelect />
      </Route>
      <Route path='/ruels'>
        <Ruels />
      </Route>
    </div>
  );
}

export default App;
