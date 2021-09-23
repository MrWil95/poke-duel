import '../css/Opponent.css'
import { useState, useEffect } from 'react'
import { fetchAllPokemon } from '../services'
import OpponentHealthbar from './OpponentHealthbar'

export default function Opponent() {
   const [loading, setLoading] = useState(true)
   const [opponent, setOpponent] = useState({})

   useEffect(() => {
      const getOnePokemon = async () => {
         const allPokemon = await fetchAllPokemon()
         const pokemon = allPokemon[Math.floor(Math.random() * allPokemon.length)]
         console.log(allPokemon)
         console.log(pokemon)
         setOpponent(pokemon)
         setLoading(false)
      }
      getOnePokemon()
      
   }, [])

   if (loading) {
      return <div>Loading...</div>
   }
   
   return (
      <div className='Opponent'>
         <img className='Image' src={opponent.fields?.image} alt={opponent.fields.name} key={opponent.image}/>
         <h2>{opponent.fields?.name}</h2>
         <h3>{opponent.fields?.type}</h3>
         <h3>{opponent.fields?.attacks}</h3>
         <OpponentHealthbar />
      </div>
   )
         
}