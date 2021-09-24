import '../css/OpponentHealthbar.css'
// import { useState } from 'react'


export default function OpponentHealthbar(props) {
   const {health} = props
   // console.log(props)
   

   
   return (
      <div className='OpponentHealthbar' >
         <div 
            style={
               {width: `${health}%`}
               // {background-color: `${health}%` < 61  ? 'yellow' || `${health}%` < 30 background-color:'red'} 
            } 
            className='InnerHealth'
         >
         </div>
      </div>
   )
}
