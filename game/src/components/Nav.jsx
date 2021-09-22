import {Link} from 'react-router-dom'
import '../css/Nav.css'

export default function Nav() {
   return (
      <div className='Nav'>
         <ul>
            <li><Link to='/pokemonlists'><button>Start</button></Link></li>
            <br />
            <li><Link to='/new'><button>Add Pokémon</button></Link></li>
            <br />
            <li><Link to='/ruels'><button>Ruels</button></Link></li>
         </ul>
      </div>
   )
}
