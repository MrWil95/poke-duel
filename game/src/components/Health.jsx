import PlayerTraits from './PlayerTraits'
import Opponent from './Opponent'
import {useState} from 'react'
   
export default function Health() {
   const [healthbar, setHealthBar] = useState(0)
   const [dealdamage, setDealDamage] = useState(0)
   
   const opponentsHealth = () => {
      let health = 100
      setHealthBar(health)
   }

   const dealtDamage = () => {
      const damage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15]
      const damageDealt = damage[Math.floor(Math.random() * damage.length)]
      console.log(damage)
      console.log(damageDealt)
      setDealDamage(damageDealt)
      console.log(healthbar - dealdamage)
   }

   return (
      <div>
         <PlayerTraits
            dealdamage={dealdamage} 
            setDealDamage={setDealDamage}
            dealtDamage={dealtDamage}  
         />
         <Opponent
            healthbar={healthbar} 
            setHealthBar={setHealthBar}
            opponentsHealth={opponentsHealth}
         />
      </div>
   )
}
