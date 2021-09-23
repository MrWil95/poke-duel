import '../css/PlayerTraits.css'
import Healthbar from "./Healthbar"
import Attacks from './Attacks'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import { fetchOnePokemon } from '../services'

export default function PlayerTraits(props) {
   const [pokemonlist, setPokemonList] = useState({})
   const [loading, setLoading] = useState(true)
   const {id} = useParams()
   const {dealtDamage} = props
   
   useEffect(() => {
      const getCurrentPokemon = async () => {
         setPokemonList(await fetchOnePokemon(id))
         setLoading(false)
      }
      getCurrentPokemon()

   }, [id])

   if (loading) {
         return <div>Loading...</div>
   }

   return (
      <div className='PlayerTraits'>
         <Healthbar />
         <h3>{pokemonlist.fields.name}</h3>
         <h4>{pokemonlist.fields.type}</h4>
         <Attacks dealtDamage={dealtDamage} />
      </div>
   )
}
