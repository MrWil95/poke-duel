// import { useState, useEffect } from 'react'
// import {useParams} from 'react-router'
// import { fetchPokemon } from '../services'

// export default function Opponent() {
//    const [pokemonlists, setPokemonLists] = useState([])
//    const [pokemonlist, setPokemonList] = useState('')
//    const [loading, setLoading] = useState(true)
//    const {id} = useParams()

//    useEffect(() => {
//       const getPokemon = async () => {
//          setPokemonLists(await fetchPokemon(id))
//          setLoading(false)
//       }
//       getPokemon()
//    }, [id])

      
//    const randomOpponent = () => {
//       const pokemonlist = setPokemonLists[Math.floor(Math.random() * pokemonlists.length)]
//       setPokemonList(pokemonlist)
//    }
//    randomOpponent()

//    if (loading) {
//       return <div>Loading...</div>
//    }
   
//    return (
//       <div>
//          <img src={pokemonlist.fields?.image} alt={pokemonlist.fields.name} key={pokemonlist.image}/>
//          <h2>{pokemonlist.fields?.name} </h2>
//          <h3>{pokemonlist.fields?.type}</h3>
//          <h3>{pokemonlist.fields?.attacks}</h3>
//       </div>
//    )
         
// }
// const history = useHistory

   // const handleClick = (e) => {
   //    e.preventDefault()
   //    const randomOpponent = pokemonlists[Math.floor(Math.random() * pokemonlists.length)]
   //    setPokemonList(randomOpponent)
   //    history.push(`/pokemonlists/${pokemonlist.id}`)
   // }