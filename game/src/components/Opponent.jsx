import '../css/Opponent.css'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router'
import { fetchAllPokemon } from '../services'
import OpponentHealthbar from './OpponentHealthbar'
import CharacterDetails from './CharacterDetails'

export default function Opponent(props) {
   const [loading, setLoading] = useState(true)
   const [opponent, setOpponent] = useState({})
   const [health, setHealth] = useState(100)
   const {healthbar, damage} = props
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
   }, [])

   useEffect(() => {
      setHealth(prevHealth => prevHealth - damage)
      {health < 0 ? <Redirect to='/winnerinfo' /> : <CharacterDetails />}
   }, [damage])

   if (loading) {
      return <div>Loading...</div>
   }
   
   return (
      <div className='Opponent'>
         <img className='Image' src={opponent.fields?.image} alt={opponent.fields.name} key={opponent.image}/>
         <h2>{opponent.fields?.name}</h2>
         <h3>{opponent.fields?.type}</h3>
         <h3>{opponent.fields?.attacks}</h3>
         <OpponentHealthbar
            healthbar={healthbar}
         />
      </div>
   )
         
}