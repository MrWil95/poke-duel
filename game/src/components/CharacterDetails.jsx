import {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'
import { fetchPokemon } from '../services'

export default function CharacterDetails() {
   const [pokemon, setPokemon] = useState({})
   const [loading, setLoading] = useState(true)
   const {id} = useParams()
   
   useEffect(() => {
      const getPokemon = async () => {
         setPokemon(fetchPokemon(id))
         setLoading(false)
      }
      getPokemon()
   }, [id])

   if (loading) {
         return <div>Loading...</div>
      }

   return (
      <div>
         <img src={pokemon.fields?.image} alt={pokemon.fields?.name}/>
         <h2>{pokemon.fields?.name}</h2>
         <h3>{pokemon.fields?.type}</h3>
         <h3>{pokemon.fields?.attacks}</h3>
         <p>{pokemon.fields?.attacks_value}</p>
         <Link to={`/pokemons/${pokemon.id}/edit`}>Edit</Link>
         <DeleteButton id={pokemon.id} />
      </div>
   )
}
