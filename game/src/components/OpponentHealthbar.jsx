import '../css/OpponentHealthbar.css'
import { useState} from 'react'


export default function OpponentHealthbar() {
   const [healthbar, setHealthBar] = useState(0)

   const setOpponentHealth = () => {
      let health = 100
      setHealthBar(health)
   }

   
   return (
      <div className='OpponentHealthbar'></div>
   )
}
