import {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import {Link} from 'react-router-dom'
import DeleteButton from './DeleteButton'
import {fetchPokemon, fetchPokémon} from '../services'
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

// const getItems = () => {
//    Array(array.length)
//       .fill(0)
//       .map((_, ind) => ({ id: `element-${ind}`}))

// }

export default function CharacterSelect() {
   // const [items, setItems] = useState(getItems)
   const [pokemons, setPokemons] = useState([])
   const [pokemon, setPokemon] = useState({})
   // const [position, setPosition] = useState(0)
   const [loading, setLoading] = useState(true)
   const {id} = useParams()

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
         setPokemons(await fetchPokémon())
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
         
         {pokemons.map(pokemon => {
            return (
               <div>
                  <button><Link to={`/pokemons/${pokemon.id}`} key={pokemon.id}>Start</Link></button>
                  <img src={pokemon.fields.image} alt={pokemon.fields.image} />
                  <h3>{pokemon.fields.name}</h3>
                  <h4>{pokemon.fields.type}</h4>
                  <h4>{pokemon.fields.attcks}</h4>
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