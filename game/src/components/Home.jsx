import '../css/Home.css'
import Nav from './Nav'
import {Link} from 'react-router-dom'

export default function Home() {
   return (
      <div className='Home'>
         <div className='Home-header'>
         <Link to='/'>
            <h1>Poké Duel</h1>
         </Link>
         </div>
         <Nav />
      </div>
   )
}

