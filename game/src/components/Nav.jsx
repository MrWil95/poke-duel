import {Link} from 'react-router-dom'

export default function Nav() {
   return (
      <div>
         <Link to='/characterselect'>Start</Link>
         <br />
         <Link to='/new'>Add Pokémon</Link>
         <br />
         <Link to='/'>Ruels</Link>
      </div>
   )
}
