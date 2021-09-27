import '../css/PlayerConsole.css'
import Healthbar from "./Healthbar"
import Attacks from './Attacks'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import { fetchOnePokemon } from '../services'

export default function PlayerConsole(props) {
   const [currentpokemon, setCurrentPokemon] = useState({})
   const [loading, setLoading] = useState(true)
   // const [health, setHealth] = useState(100)
   const {id} = useParams()
   const {dealtDamage} = props
   console.log(props)
   
   useEffect(() => {
      const getCurrentPokemon = async () => {
         setCurrentPokemon(await fetchOnePokemon(id))
         setLoading(false)
      }
      getCurrentPokemon()

   }, [id])

   if (loading) {
         return <div>Loading...</div>
   }

   return (
      <div className='PlayerConsole'>
         <Healthbar />
         <h3>{currentpokemon.fields.name}</h3>
         <h4>{currentpokemon.fields.type}</h4>
         <Attacks dealtDamage={dealtDamage} />
      </div>
   )
}
