import {Link} from 'react-router-dom'
import '../css/Nav.css'

export default function Nav() {
   function toggleImage(e) {
      e.target.setAttribute( 'src', 'https://i.imgur.com/bJfk5uO.png');
      e.target.setAttribute('alt', 'openpokedex');
    }

   return (
      <div className='Nav'>
            <Link to='/allpokemon' className='wobble'><img src='https://i.imgur.com/yjq4Hgb.png' alt='pokeball' className='icons' /></Link>
            <label className='start'>Start</label>
            <br />
            <br />
            <Link to='/new' className='pokedex'><img src='https://i.imgur.com/i7RJlYC.png' alt='pokedex' className='icons' onClick={toggleImage} /></Link>
            <label className='add'>Add to Pokedex</label>
      </div>
   )
}
