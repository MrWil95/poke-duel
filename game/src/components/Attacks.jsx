// Grab attacks fields from CharacterDetails(props)
// Grab each piece of attacks string & place in it's own button

import '../css/Attacks.css'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import { fetchOnePokemon } from '../services'

export default function Attacks(props) {
   const [yourpokemonsattacks, setYourPokemonsAttacks] = useState('')
   const [loading, setLoading] = useState(true)
   const {id} = useParams()
   const {dealtDamage,} = props
   console.log(props)
   
   useEffect(() => {
      const getAttacks = async () => {
         const yourPokemon = await fetchOnePokemon(id)
         const yourAttacks = yourPokemon.fields.attacks
         console.log(yourAttacks)
         setYourPokemonsAttacks(yourAttacks.split(' '))
         setLoading(false)
         console.log(yourpokemonsattacks)
      }
      getAttacks()
   }, [id])


   if (loading) {
      return <div>Loading...</div>
   }

   return (
      <div className='Attacks'>
         <button onClick={dealtDamage}>{yourpokemonsattacks[0]}</button>
         <button>{yourpokemonsattacks[1]}</button>
         <button>{yourpokemonsattacks[2]}</button>
      </div>
   )
}
