import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {fetchPokémon} from '../services'

export default function CharacterSelect() {
   const [pokemonlists, setPokemonLists] = useState([])
   console.log(pokemonlists)


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