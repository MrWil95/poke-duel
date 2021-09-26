import '../css/Form.css'

export default function Form(props) {
   const {name, setName,
         type, setType,
         attacks, setAttacks,
         image, setImage,
         battleimage, setBattleImage, handleSubmit, label} = props

   return (
      <form onSubmit={handleSubmit} className='NewPokemon'>
         <input
            type='text'
            value={name}
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
            className='data'
         />
         <br />
         <input 
            type='text'
            value={type}
            placeholder='Type'
            onChange={(e) => setType(e.target.value)}
            className='data'
         />
         <br />
         <input
            type='text'
            value={attacks}
            placeholder='Attacks'
            onChange={(e) => setAttacks(e.target.value)}
            className='data'
         />
         <br />
         <input
            type='text'
            value={image}
            placeholder='Image'
            onChange={(e) => setImage(e.target.value)}
            className='data'
         />
         <br />
         <input 
            type='text'
            value={battleimage}
            placeholder='Battle Image'
            onChange={(e) => setBattleImage(e.target.value)}
            className='data'
         />
         <br />
         <button type='submit'  disabled={!name || !type || !attacks || !image || !battleimage} className='add-pokemon'>{label} Pokémon</button>
      </form>
   )
}
