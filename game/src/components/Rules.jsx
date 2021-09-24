import {Link} from 'react-router-dom'
import '../css/Rules.css'

export default function Rules() {
   return (
      <div className='Rules'>
         <Link to='/'>
            <h1>Poké Duel</h1>
         </Link>
         <img src='https://i.imgur.com/eiqRS40.png' alt='original starter pokémon' />
         <p>Welcome to the game you all know and love made from React! Make your way to the character select page to see 
            our selection of players. Here you can select any character in our roster, or add one that we migt not have yet.
         </p>
         <img src='https://i.imgur.com/cEktmN3.png' alt='pokémon battling' />
         <p>After selecting a character your battle begins. Select your attack and watch it throw some damage your oponents
            way! Attacks will deal more damage if their type is paired with their opposite. Once you've won enter you're trainer
            id for the records.
         </p>
      </div>
   )
}