import {Link} from 'react-router-dom'

export default function Nav() {
   return (
      <div>
         <button><Link to='/pokemon'>Start</Link></button>
         <br />
         <button><Link to='/new'>Add Pokémon</Link></button>
         <br />
         <button><Link to='/'>Ruels</Link></button>
      </div>
   )
}
