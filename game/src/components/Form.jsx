import '../css/Form.css'

export default function Form(props) {
   const {name, setName,
         type, setType,
         attacks, setAttacks,
         image, setImage,
         battleimage, setBattleImage, handleSubmit} = props

   return (
      <form onSubmit={handleSubmit}>
         <label>Name</label>
         <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <br />
         <label>Type</label>
         <input 
            type='text'
            value={type}
            onChange={(e) => setType(e.target.value)}
         />
         <br />
         <label>Attacks</label>
         <input
            type='text'
            value={attacks}
            onChange={(e) => setAttacks(e.target.value)}
         />
         <br />
         <label>Image</label>
         <input
            type='text'
            value={image}
            onChange={(e) => setImage(e.target.value)}
         />
         <br />
         <label>Battle Image</label>
         <input 
            type='text'
            value={battleimage}
            onChange={(e) => setBattleImage(e.target.value)}
         />
         <br />
         <button type='submit' disabled={!name || !type || !attacks || !image || !battleimage}>Add Pokémon</button>
      </form>
   )
}
