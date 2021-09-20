// import { useState, useEffect } from 'react'
// import {useParams} from 'react-router'
// import { useHistory } from 'react-router'
// import { fetchPokémon } from '../services'
// import CharacterSelect from './CharacterSelect'

// export default function Opponent() {
//    const [pokemonlists, setPokemonLists] = useState([])
//    const [pokemonlist, setPokemonList] = useState('')
//    const {id} = useParams()

//    useEffect(() => {
//       const getPokémon = async () => {
//          setPokemonLists(await fetchPokémon())
//       }
//       getPokémon()
//    }, [id])

//    const history = useHistory

//    const handleClick = (e) => {
//       e.preventDefault()
//       const randomOpponent = pokemonlists[Math.floor(Math.random() * pokemonlists.length)]
//       setPokemonList(randomOpponent)
//       history.push(`/pokemonlists/${pokemonlist.id}`)
//    }

//    return (
//       <div>
//          <CharacterSelect 
//             pokemonlist={pokemonlist}
//             setPokemList={setPokemonList}
//             handleClick={handleClick}
//          />
//       </div>
//    )
         
// }
