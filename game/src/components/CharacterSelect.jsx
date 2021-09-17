import {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import {Link} from 'react-router-dom'
import DeleteButton from './DeleteButton'
import {fetchPokemon, fetchPokémon} from '../services'


export default function CharacterSelect() {
   const [pokemon, setPokemon] = useState([])
   const [loading, setLoading] = useState(true)
   const {id} = useParams()

   useEffect(() => {
      const getPokémon = async () => {
         setPokemon(await fetchPokémon())
      }
      getPokémon()

      const getPokemon = async () => {
         setPokemon(fetchPokemon(id))
         setLoading(false)
      }
      getPokemon()
   }, [])

   if (loading) {
      return <div>Loading...</div>
   }

   return (
      <div>
         
      </div>
   )
}
