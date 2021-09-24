import {Link} from 'react-router-dom'
// import { useState } from 'react'
import '../css/Nav.css'

export default function Nav() {
   // const [togglepokedex, setTogglePokeDex] = useState(true) 
   // const images= {
   //    closed: 'https://i.imgur.com/i7RJlYC.png',
   //    open: 'https://i.imgur.com/bJfk5uO.png'
   //  }

   //    const toggleImage = () => {
   //      setTogglePokeDex(togglepokedex => ({ togglepokedex: !togglepokedex }))
   //    }
    
   //    const getImageName = () => {
   //       {togglepokedex ? 'closed' : 'open'}
   //    }

   //    const setImage = getImageName()
   
   // let image

   // const toggleImage = () => {
   //    if(togglepokedex) {
   //       image = 'https://i.imgur.com/i7RJlYC.png'
   //    } else {
   //       image = 'https://i.imgur.com/bJfk5uO.png'
   //    }
   // }

   return (
      <div className='Nav'>
         <ul>
            <li><Link to='/allpokemon'><img src='https://i.imgur.com/3YsRPC8.png' alt='pokeball' className='Icons'/></Link></li>
            <br />
            <li><Link to='/new'><img src='https://i.imgur.com/i7RJlYC.png' alt='pokedex' className='Icons'/> </Link></li>
            <br />
            <li><Link to='/ruels'><button>Ruels</button></Link></li>
         </ul>
      </div>
   )
}
