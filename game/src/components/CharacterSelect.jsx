import '../css/CharacterSelect.css'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {fetchPokémon} from '../services'
import DeleteButton from './DeleteButton'

export default function CharacterSelect() {
   const [pokemonlists, setPokemonLists] = useState([])
   // const {handleClick} = props


   useEffect(() => {
      const getPokémon = async () => {
         setPokemonLists(await fetchPokémon())
      }
      getPokémon()

   }, [])

   return (
      <div className='Character'>
         <Link to='/'>
            <h1>Poké Duel</h1>
         </Link>
         {pokemonlists?.map((pokemonlist) => {
            return (
               <div className='CharacterSelect'>
                  <Link to={`/pokemonlists/${pokemonlist.id}`} key={pokemonlist.id}> {/*onClick={handleClick}*/}
                     <img src={pokemonlist.fields.image} alt={pokemonlist.fields.name} key={pokemonlist.image}/>
                     <h2 key={pokemonlist.name}>{pokemonlist.fields.name} </h2>
                     <h3 key={pokemonlist.type}>{pokemonlist.fields.type}</h3>
                     <h3 key={pokemonlist.attacks}>{pokemonlist.fields.attacks}</h3>
                  </Link>
                  <div className='Buttons'>
                     <Link to={`/pokemonlists/${pokemonlist.id}/edit`} className='Edit'>Edit</Link>
                     <DeleteButton id={pokemonlist.id} />
                  </div>
               </div>
            )
         })}
         
      </div>
   )
}

//  <ScrollMenu
//             LeftArrow={LeftArrow}
//             rightArrow={RightArrow} 
//          >
//             {pokemon.map(({pokemon}) => {
//                <Card 
//                   pokemon={pokemon}

//                />
//             })}
         
//          </ScrollMenu>  