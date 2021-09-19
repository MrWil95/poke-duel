import { useHistory } from 'react-router'
import { deletePokémon } from '../services'

export default function DeleteButton(props) {
   const history = useHistory()
   const handleDelete = async () => {
      await deletePokémon(props.id)
      history.push('/pokemonlists')
   }

   return (
      <button conClick={handleDelete}>Delete</button>
   )
}
