import '../css/Delete.css'
import { useHistory } from 'react-router-dom'
import { deletePokémon } from '../services'

export default function DeleteButton(props) {
   const history = useHistory()
   const handleDelete = async () => {
      await deletePokémon(props.id)
      history.go(0)
   }

   return (
      <button className='Delete' onClick={handleDelete}>Delete</button>
   )
}
