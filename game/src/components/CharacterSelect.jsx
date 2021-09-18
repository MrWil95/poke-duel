import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {fetchPokémon} from '../services'

export default function CharacterSelect() {
   const [pokemonlists, setPokemonLists] = useState([])


   useEffect(() => {
      const getPokémon = async () => {
         setPokemonLists(await fetchPokémon())
      }
      getPokémon()

   }, [])


   return (
      <div>
         {pokemonlists?.map((pokemonlist) => {
            return (
               <div>
                  <Link to={`/characterselect/${pokemonlist.id}`} key={pokemonlist.id}>
                     <img src={pokemonlist.fields.image} alt={pokemonlist.fields.name}/>
                     <h2>{pokemonlist.fields.name}</h2>
                     <h3>{pokemonlist.fields.type}</h3>
                     <h3>{pokemonlist.fields.attacks}: {pokemonlist.fields.attackvalues}</h3>
                  </Link>
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