import {Link} from 'react-router-dom'
import '../css/Nav.css'

export default function Nav() {
   function toggleImage(e) {
      e.target.setAttribute( 'src', 'https://i.imgur.com/bJfk5uO.png');
      e.target.setAttribute('alt', 'openpokedex');
    }

   return (
      <div className='Nav'>
         <ul>
            <li><Link to='/allpokemon'><img src='https://i.imgur.com/3YsRPC8.png' alt='pokeball' className='Icons'/></Link></li>
            <br />
            <li><Link to='/new'><img src='https://i.imgur.com/i7RJlYC.png' alt='pokedex' className='Icons' onClick={toggleImage}/> </Link></li>
            <br />
            <li><Link to='/ruels'><button>Ruels</button></Link></li>
         </ul>
      </div>
   )
}
