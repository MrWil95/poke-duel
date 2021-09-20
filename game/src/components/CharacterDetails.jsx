import '../css/CharacterDetail.css'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router'
// import { Link } from 'react-router-dom'
// import DeleteButton from './DeleteButton'
import { fetchPokemon } from '../services'
// import Opponent from './Opponent'

export default function CharacterDetails() {
   const [pokemonlist, setPokemonList] = useState({})
   const [loading, setLoading] = useState(true)
   const {id} = useParams()
   
   useEffect(() => {
      const getPokemon = async () => {
         setPokemonList(await fetchPokemon(id))
         setLoading(false)
      }
      getPokemon()
   }, [id])

   if (loading) {
         return <div>Loading...</div>
      }

   return (
      <div className='Details'>
         <h3>{pokemonlist.fields?.type}</h3>
         <h4>{pokemonlist.fields?.attacks}</h4>
         <img src={pokemonlist.fields?.battleimage} alt={pokemonlist.fields?.name}/>
         {/* <Opponent /> */}
      </div>
   )
}
