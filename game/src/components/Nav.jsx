import {Link} from 'react-router-dom'
import '../css/Nav.css'

export default function Nav() {
   function toggleImage(e) {
      e.target.setAttribute( 'src', 'https://i.imgur.com/bJfk5uO.png');
      e.target.setAttribute('alt', 'openpokedex');
    }

   return (
      <div className='Nav'>
            <div clasName='pulse'>
               <Link to='/allpokemon' className='wobble'><img src='https://i.imgur.com/w6kuTbo.png' alt='pokeball' className='Icons' /></Link>
            </div>
            <label className='Label'>Start</label>
            <br />
            <br />
            <Link to='/new'><img src='https://i.imgur.com/i7RJlYC.png' alt='pokedex' className='Icons' onClick={toggleImage} /></Link>
            <label className='Label'>Add to Pokedex</label>
      </div>
   )
}
