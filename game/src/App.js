import './App.css'
import Nav from './components/Nav'
import CharacterSelect from './components/CharacterSelect'
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
      <Route exact path='/'></Route>
      <Route exact path='/characterselect'>
        <CharacterSelect />
      </Route>
    </div>
  );
}

export default App;
