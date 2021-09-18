import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router'
import axios from 'axios'
import Form from './Form'

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY
const URL = `https://api.airtable.com/v0/${airtableBase}/Pokemonlists`

const config = {
   headers: {
      Authorization: `Bearer ${airtableKey}`
   }
}

export default function EditPokemon() {
   const [name, setName] = useState('')
   const [type, setType] = useState('')
   const [attacks, setAttacks] = useState('')
   const [attackvalues, setAttackValues] = useState('')
   const [image, setImage] = useState ('')
   const [battleimage, setBattleImage] = useState('')

   const {id} = useParams()
   const history=useHistory()

   useEffect (() => {
      const fetchPokemon = async () => {
         const res = await axios.get(`${URL}/${id}`, config)
         const {fields} = res.data 
         setName(fields.name)
         setType(fields.type)
         setAttacks(fields.attacks)
         setAttackValues(fields.attackvalues)
         setImage(fields.image)
         setBattleImage(fields.battleimage)
      }

      fetchPokemon()
   }, [id])

   const handleSubmit = async (e) => {
      e.preventDefault()
         const fields = {
            name,
            type,
            attacks,
            attackvalues,
            image,
            battleimage,
      }

      const res = await axios.put(`${URL}/${id}`, {fields}, config)
      console.log(res.data)
      history.push('/pokemonlists')
   }

   return (
      <div>
         <Form 
            name={name}
            setName={setName}
            type={type}
            setType={setType}
            attacks={attacks}
            setAttacks={setAttacks}
            attackvalues={attackvalues}
            setAttackValues={setAttackValues}
            image={image}
            setImage={setImage}
            battleimage={battleimage}
            setBattleImage={setBattleImage}
            handleSubmit={handleSubmit}
         />     
      </div>
   )
}

