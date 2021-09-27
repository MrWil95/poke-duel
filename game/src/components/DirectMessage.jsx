import { useState } from 'react'
import {send} from 'emailjs-com'
import { useHistory } from 'react-router'
import '../css/DirectMessage.css'

export default function DirectMessage() {
   const [toSend, setToSend] = useState({
      from_name: '',
      message: '',
      reply_to:'',   
   })
   const history = useHistory()

   const handleMessage = (e) => {
      e.preventDefault()
      send(
         'service_316gric',
         'template_j9lh5lr',
         toSend,
         'user_WQeWNR3BOHjZxcF3KttGs'
      )
         .then((response) => {
            console.log('Success!', response.status, response.text)
            history.push('/home')
         })
         .catch((error) => {
            console.log('Failed...', error)
         })
   }

   const handleChange = (e) => {
      setToSend({...toSend, [e.target.name]: e.target.value})
   }

   return (
      <div className='DirectMessage'>
         <form onSubmit={handleMessage} className='send-message'>
            <input 
               type='text'
               name='from_name'
               placeholder='Your name'
               value={send.from_name}
               onChange={handleChange}
               className='info'
            />
            <br />
            <input 
               type='text'
               name='message'
               placeholder='Your message'
               value={send.message}
               onChange={handleChange}
               className='info'
            />
            <br />
            <input 
               type='text'
               name='reply_to'
               placeholder='Your email'
               value={send.reply_to}
               onChange={handleChange}
               className='info'
            />
            <br />
            <button type='submit' className='send' disabled={!toSend}>Send</button>
         </form>
         
      </div>
   )
}
