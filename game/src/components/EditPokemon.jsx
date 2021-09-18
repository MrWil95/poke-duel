import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router'
import axios from 'axios'
import Form from './Form'

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY
const URL = `https://api.airtable.com/v0/${airtableBase}/Teams`

const config = {
   headers: {
      Authorization: `Bearer ${airtableKey}`
   }
}

export default function EditPokemon() {
   const [name, setName] = useState('')
   const [type, setType] = useState('')

   return (
      <div>
         
      </div>
   )
}

