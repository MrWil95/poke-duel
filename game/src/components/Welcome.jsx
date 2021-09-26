import '../css/Welcome.css'
import {Link} from 'react-router-dom'

export default function Welcome() {

   return (
      <div className='Welcome'>
         <Link to='/rules' className='throw'><img src='https://i.imgur.com/yjq4Hgb.png' className='throwpokeball' /></Link>
      </div>
   )
}
