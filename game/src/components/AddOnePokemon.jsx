import '../css/AddPokemon.css'
import {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import Form from './Form'
import DirectMessage from './DirectMessage'
import axios from 'axios'

export default function AddPokémon() {
   const [name, setName] = useState('')
   const [type, setType] = useState('')
   const [attacks, setAttacks] = useState('')
   const [image, setImage] = useState('')
   const [battleimage, setBattleImage] = useState('')
   const [showform, setShowForm] = useState(false)
   

   const airtableBase = process.env.REACT_APP_AIRTABLE_BASE
   const airtableKey = process.env.REACT_APP_AIRTABLE_KEY
   const URL = `https://api.airtable.com/v0/${airtableBase}/AllPokemon`

   const config = {
      headers: {
         Authorization: `Bearer ${airtableKey}`
      }
   }

   const history = useHistory()

   const handleSubmit = async (e) => {
      e.preventDefault()
      const fields = {
         name,
         type,
         attacks,
         image,
         battleimage,
      }
      const res = await axios.post(URL, {fields}, config)
      history.push('/allpokemon')
      console.log(res.data)
   }

   return (
      <div className='Add'>
         <Link to='/home'>
            <h1>Poké Duel</h1>
         </Link>
         {showform ? (<DirectMessage />) : 
            (<Form 
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
               label={'Add'}
            />)}
         <button className='togglebtn' onClick={(e) => {
            e.preventDefault() 
            setShowForm(!showform)
         }}>{`${showform ?  'Add a Pokémon' : 'Reach out'}`}</button>
      </div>
   )
}
