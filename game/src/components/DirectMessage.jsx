import { useState } from 'react'
import {send} from 'emailjs-com'
import '../css/DirectMessage.css'

export default function DirectMessage() {
   const [toSend, setToSend] = useState({
      from_name: '',
      to_name: '',
      message: '',
      reply_to:'',   
   })

   const handleMessage = (e) => {
      e.preventDefault()
      send(
         'service_316gric',
         'template_j9lh5lr',
         toSend,
         ''
      )
         .then((response) => {
            console.log('Success!', response.status, response.text)
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
         <form onSubmit={handleMessage}>
            <input 
               type='text'
               name='from_name'
               placeholder='Your name'
               value={send.from_name}
               onChange={handleChange}
            />
            <br />
            <input 
               type='text'
               name='to_name'
               placeholder='Your name'
               value={send.to_name}
               onChange={handleChange}
            />
            <br />
            <input 
               type='text'
               name='message'
               placeholder='Your message'
               value={send.message}
               onChange={handleChange}
            />
            <br />
            <input 
               type='text'
               name='reply_to'
               placeholder='Your email'
               value={send.reply_to}
               onChange={handleChange}
            />
            <br />
            <button type='submit'>Send</button>
         </form>
         
      </div>
   )
}
