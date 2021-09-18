import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {fetchPokémon} from '../services'
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

// const getItems = () => {
//    Array(array.length)
//       .fill(0)
//       .map((_, ind) => ({ id: `element-${ind}`}))

// }

export default function CharacterSelect() {
   // const [items, setItems] = useState(getItems)
   const [pokemon, setPokemon] = useState([])
   // const [position, setPosition] = useState(0)
   // const isItemSelected = (id) => !!isItemSelected.find((e) => e === id)
   // const handleClick = (id) => ({getItemById, scrollToItem}) => {
   //    const itemSelected = isItemSelected(id)
   // }

   // setSelected((currentSelected) => {
   //    itemSelected
   //       ? currentSelected.filter((e) => e !== id) 
   //       : currentSelected
   // })

   useEffect(() => {
      const getPokémon = async () => {
         setPokemon(await fetchPokémon())
      }
      getPokémon()

   }, [])


   return (
      <div>
         
         {pokemon?.map(pokemon => {
            return (
               <div>
                  <button>
                     <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
                        <img src={pokemon.fields.image} alt={pokemon.fields.id} />
                        <h3>{pokemon.fields?.name}</h3>
                        <h4>{pokemon.fields.type}</h4>
                        <h4>{pokemon.fields.attcks}</h4>
                     </Link>
                  </button>
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