import {Link} from 'react-router-dom'
import '../css/Nav.css'

export default function Nav() {
   return (
      <div className='Nav'>
         <ul>
            <li><Link to='/characterselect'>Start</Link></li>
            <br />
            <li><Link to='/new'>Add Pokémon</Link></li>
            <br />
            <li><Link to='/'>Ruels</Link></li>
         </ul>
      </div>
   )
}
