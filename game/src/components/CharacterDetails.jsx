import '../css/CharacterDetail.css'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import { fetchOnePokemon } from '../services'
import Opponent from './Opponent'
import PlayerConsole from './PlayerConsole'

export default function CharacterDetails() {
   const [currentpokemon, setCurrentPokemon] = useState({})
   const [damage, setDamage] = useState(0)
   const [loading, setLoading] = useState(true)
   const {id} = useParams()
   
   useEffect(() => {
      const getCurrentPokemon = async () => {
         setCurrentPokemon(await fetchOnePokemon(id))
         setLoading(false)
      }
      getCurrentPokemon()

   }, [id])

   const dealtDamage = () => {
      const damage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15]
      const damageDealt = damage[Math.floor(Math.random() * damage.length)]
      console.log(damageDealt)
      setDamage(damageDealt)
   }

   if (loading) {
      return <div>Loading...</div>
   }

   return (
      <div className='Details'>
         <Opponent damage={damage}/>
         <img src={currentpokemon.fields?.battleimage} alt={currentpokemon.fields?.name} className='Player' />
         <PlayerConsole dealtDamage={dealtDamage} />
      </div>
   )
}
