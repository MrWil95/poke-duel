import '../css/CharacterSelect.css'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {fetchAllPokemon} from '../services'
import DeleteButton from './DeleteButton'

export default function CharacterSelect() {
   const [pokemonlists, setPokemonLists] = useState([])


   useEffect(() => {
      const getAllPokemon = async () => {
         setPokemonLists(await fetchAllPokemon())
      }
      getAllPokemon()

   }, [])

   return (
      <div className='Character'>
         <Link to='/'>
            <h1>Poké Duel</h1>
         </Link>
         {pokemonlists?.map((pokemonlist) => {
            return (
               <div className='CharacterSelect'>
                  <Link to={`/pokemonlists/${pokemonlist.id}`} key={pokemonlist.id}>
                     <img src={pokemonlist.fields.image} alt={pokemonlist.fields.name} key={pokemonlist.image}/>
                     <h2 key={pokemonlist.name}>{pokemonlist.fields.name} </h2>
                     <h3 key={pokemonlist.type}>{pokemonlist.fields.type}</h3>
                  </Link>
                  <div className='Buttons'>
                     <Link to={`/pokemonlists/${pokemonlist.id}/edit`}><h5>Edit</h5></Link>
                     <DeleteButton id={pokemonlist.id} />
                  </div>
               </div>
            )
         })}
         
      </div>
   )
} 