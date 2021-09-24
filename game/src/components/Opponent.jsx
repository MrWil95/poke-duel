import '../css/Opponent.css'
import { useState, useEffect } from 'react'
// import { Redirect } from 'react-router'
import { fetchAllPokemon } from '../services'
import OpponentHealthbar from './OpponentHealthbar'

export default function Opponent(props) {
   const [loading, setLoading] = useState(true)
   const [opponent, setOpponent] = useState({})
   const [health, setHealth] = useState(100)
   const {damage} = props
      console.log(props)

   useEffect(() => {
      const getOnePokemon = async () => {
         const allPokemon = await fetchAllPokemon()
         const pokemon = allPokemon[Math.floor(Math.random() * allPokemon.length)]
         setOpponent(pokemon)
         setLoading(false)
      }
      getOnePokemon()
      
      console.log(health)
   }, [health])

   useEffect(() => {
      setHealth(prevHealth => prevHealth - damage)
      
   }, [damage])

   if (loading) {
      return <div>Loading...</div>
   }
   
   return (
      <div className='Opponent'>
         <img className='Image' src={opponent.fields?.image} alt={opponent.fields.name} key={opponent.image}/>
         <div className='elements'>
            <h3>{opponent.fields?.name}</h3>
            <h4>{opponent.fields?.type}</h4>
            <h5>{opponent.fields?.attacks}</h5>
         </div>
         <OpponentHealthbar
            health={health}
         />
      </div>
   )
         
}