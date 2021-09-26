import '../css/Home.css'
import Nav from './Nav'
import {Link} from 'react-router-dom'

export default function Home() {
   return (
      <div className='Home'>
         <div className='Home-header'>
            <div>
               <Link to='/home'>
                  <h1>Poké Duel</h1>
               </Link>
               <img src='https://i.imgur.com/BHNjqOx.jpg' alt='pokemon stadium' className='background-image'/>
            </div>
            <Nav />
         </div>
      </div>
   )
}

