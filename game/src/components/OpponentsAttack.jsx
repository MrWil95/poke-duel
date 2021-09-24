import {useState} from 'react'

export default function OpponentsAttack() {
   const [opponentsattack, setOpponentsAttack] = useState(0)

   const dealDamage = () => {
      const damage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15]
      const damageDone = damage[Math.floor(Math.random() * damage.length)]
      // console.log(damage)
      // console.log(damageDone)
      setOpponentsAttack(damageDone)
      // opponentsattack
   }
   return (
      <div>
         
      </div>
   )
}
