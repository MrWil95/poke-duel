import '../css/AddPokemon.css'
import {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import Form from './Form'
import axios from 'axios'

export default function AddPokémon() {
   const [name, setName] = useState('')
   const [type, setType] = useState('')
   const [attacks, setAttacks] = useState('')
   const [image, setImage] = useState('')
   const [battleimage, setBattleImage] = useState('')
   

   const airtableBase = process.env.REACT_APP_AIRTABLE_BASE
   const airtableKey = process.env.REACT_APP_AIRTABLE_KEY
   const URL = `https://api.airtable.com/v0/${airtableBase}/Pokemonlists`

   const config = {
      headers: {
         Authorization: `Bearer ${airtableKey}`
      }
   }

   const history = useHistory()

   const handleSubmit = async (e) => {
      e.preventDeafault()
      const fields = {
         name,
         type,
         attacks,
         image,
         battleimage,
      }
      const res = await axios.post(URL, {fields}, config)
      console.log(res.data)
      history.push('/pokemonlists')
   }

   return (
      <div className='Add'>
         <Link to='/'>
            <h1>Poké Duel</h1>
         </Link>
         <Form 
            name={name}
            setName={setName}
            type={type}
            setType={setType}
            attacks={attacks}
            setAttacks={setAttacks}
            image={image}
            setImage={setImage}
            battleimage={battleimage}
            setBattleImage={setBattleImage}
            handleSubmit={handleSubmit}
         />
      </div>
   )
}
