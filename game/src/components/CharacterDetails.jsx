import '../css/CharacterDetail.css'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import { fetchOnePokemon } from '../services'
import Opponent from './Opponent'
import PlayerTraits from './PlayerTraits'

export default function CharacterDetails() {
   const [pokemonlist, setPokemonList] = useState({})
   const [loading, setLoading] = useState(true)
   const {id} = useParams()
   
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
      <div className='Details'>
         <Opponent />
         <img src={pokemonlist.fields?.battleimage} alt={pokemonlist.fields?.name} className='Character' />
         <PlayerTraits />
      </div>
   )
}
