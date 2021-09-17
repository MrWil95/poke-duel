import axios from 'axios'

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE
const airtableKey = process.env.REACT_APP_AIRTABLE_BASE

const URL = `https://api.airtable.com/v0/${airtableBase}/Pokemon`
const config = {
   headers: {
      Authorization: `Bearer ${airtableKey}`,
   },
}

export const fetchPokémon = async () => {
   const res = await axios.get(URL, config)
   return res.data.records
}

export const fetchPokemon = async (id) => {
   const res = await axios.get(`${URL}/${id}`, config)
   return res.data
}

export const deletePokémon = async (id) => {
   const res = await axios.delete(`${URL}/${id}`, config)
   return res.data
}