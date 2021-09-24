import '../css/CharacterSelect.css'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {fetchAllPokemon} from '../services'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import DeleteButton from './DeleteButton'

export default function CharacterSelect() {
   const [allpokemon, setAllPokemon] = useState([])
   const [currentimage, setCurrentImage] = useState(0)
   const length = allpokemon.length

   useEffect(() => {
      const getAllPokemon = async () => {
         setAllPokemon(await fetchAllPokemon())
      }
      getAllPokemon()

   }, [])

   const nextImage = () => {
      setCurrentImage(currentimage === length - 1 ? 0 : currentimage + 1)
   }

   const prevImage = () => {
      setCurrentImage(currentimage === 0 ? length - 1 : currentimage - 1)
   }

   if(!Array.isArray(allpokemon) || allpokemon.length <= 0) {
      return null
   }

   return (
      <div className='Character'>
         <Link to='/'>
            <h1>Poké Duel</h1>
         </Link>
         <FaArrowAltCircleLeft className='left-arrow' onClick={prevImage}/>
         <FaArrowAltCircleRight className='right-arrow' onClick={nextImage}/>
            {allpokemon?.map((currentpokemon, index) => {
               return (
                  <div className={index === currentimage ? 'characterSlide' : 'CharacterSelect'} key={index}>
                     {index === currentimage && (
                     <div><div className='Buttons'>
                        <Link to={`/allpokemon/${currentpokemon.id}/edit`}><h5>Edit</h5></Link>
                        <DeleteButton id={currentpokemon.id} />
                     </div>
                     <Link to={`/allpokemon/${currentpokemon.id}`}>
                        <h2>{currentpokemon.fields.name}</h2>
                        <h3>{currentpokemon.fields.type}</h3>
                        <img src={currentpokemon.fields.image} alt={currentpokemon.fields.name} className='CurrentPlayer' />
                     </Link></div>)}
                     
                  </div>
               )
            })}
      </div>
   )
} 