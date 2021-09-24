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
            <li><Link to='/allpokemon' className='wobble'><img src='https://i.imgur.com/3YsRPC8.png' alt='pokeball' className='Icons' /></Link></li>
            <label className='Label'>Start</label>
            <br />
            <li><Link to='/new'><img src='https://i.imgur.com/i7RJlYC.png' alt='pokedex' className='Icons' onClick={toggleImage} /></Link></li>
            <label className='Label'>Add to Pokedex</label>
            <br />
            <li><Link to='/rules'><img src='https://i.imgur.com/q2gMJ01.png' alt='rules' className='Icons' /></Link></li>
            <label className='Label'>Rules</label>
         </ul>
      </div>
   )
}
