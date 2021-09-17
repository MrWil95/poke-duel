import {Link} from 'react-router-dom'

export default function Nav() {
   return (
      <div>
         <Link to='/'>
            <h1>Poké Duel</h1>
         </Link>
         <button><Link to='/pokemon'>Start</Link></button>
         <button><Link to='/new'>Add Pokémon</Link></button>
      </div>
   )
}
