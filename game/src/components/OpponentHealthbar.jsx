import '../css/OpponentHealthbar.css'
// import { useState } from 'react'


export default function OpponentHealthbar(props) {
   const {dealdamage,
         setDealDamage, 
         opponentsHealth} = props
   // console.log(props)
   

   
   return (
      <div className='OpponentHealthbar' opponentsHealth={opponentsHealth}></div>
   )
}
