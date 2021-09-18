import {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'
import { fetchPokemon } from '../services'

export default function CharacterDetails() {
   const [pokemonlist, setPokemonList] = useState({})
   const [loading, setLoading] = useState(true)
   const {id} = useParams()
   
   useEffect(() => {
      const getPokemon = async () => {
         setPokemonList(fetchPokemon(id))
         setLoading(false)
      }
      getPokemon()
   }, [id])

   if (loading) {
         return <div>Loading...</div>
      }

   return (
      <div>
         <img src={pokemonlist.fields?.image} alt={pokemonlist.fields?.name}/>
         <h2>{pokemonlist.fields?.name}</h2>
         <h3>{pokemonlist.fields?.type}</h3>
         <h3>{pokemonlist.fields?.attacks}</h3>
         <p>{pokemonlist.fields?.attacks_value}</p>
         <Link to={`/pokemon/${pokemonlist.id}/edit`}>Edit</Link>
         <DeleteButton id={pokemonlist.id} />
      </div>
   )
}
