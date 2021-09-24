import '../css/CharacterSelect.css'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {fetchAllPokemon} from '../services'
import DeleteButton from './DeleteButton'

export default function CharacterSelect() {
   const [allpokemon, setAllPokemon] = useState([])


   useEffect(() => {
      const getAllPokemon = async () => {
         setAllPokemon(await fetchAllPokemon())
      }
      getAllPokemon()

   }, [])

   return (
      <div className='Character'>
         <Link to='/'>
            <h1>Poké Duel</h1>
         </Link>
         {allpokemon?.map((currentpokemon) => {
            return (
               <div className='CharacterSelect'>
                  <div className='Buttons'>
                     <Link to={`/allpokemon/${currentpokemon.id}/edit`}><h5>Edit</h5></Link>
                     <DeleteButton id={currentpokemon.id} />
                  </div>
                  <Link to={`/allpokemon/${currentpokemon.id}`} key={currentpokemon.id}>
                     <h2 key={currentpokemon.name}>{currentpokemon.fields.name}</h2>
                     <h3 key={currentpokemon.type}>{currentpokemon.fields.type}</h3>
                     <img src={currentpokemon.fields.image} alt={currentpokemon.fields.name} key={currentpokemon.image} className='CurrentPlayer' />
                  </Link>
               </div>
            )
         })}
      </div>
   )
} 