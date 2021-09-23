import axios from 'axios'

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY

const URL = `https://api.airtable.com/v0/${airtableBase}/Pokemonlists`

const config = {
   headers: {
      Authorization: `Bearer ${airtableKey}`,
   },
}

export const fetchAllPokemon = async () => {
   const res = await axios.get(URL, config)
   console.log(res.data.records)
   return (res.data.records) 
}

export const fetchOnePokemon = async (id) => {
   const res = await axios.get(`${URL}/${id}`, config)
   return (res.data)
}

export const deletePokémon = async (id) => {
   const res = await axios.delete(`${URL}/${id}`, config)
   return res.data
}