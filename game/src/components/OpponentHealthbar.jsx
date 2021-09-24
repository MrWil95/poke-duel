import '../css/OpponentHealthbar.css'
// import { useState } from 'react'


export default function OpponentHealthbar(props) {
   const {healthbar} = props
   // console.log(props)
   

   
   return (
      <div className='OpponentHealthbar' >
         <div style={{width: `${healthbar}%`}} className='InnerHealth'></div>
      </div>
   )
}
