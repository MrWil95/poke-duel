import '../css/Rules.css'
import {Link, useHistory} from 'react-router-dom'
import Typewriter from 'typewriter-effect'
// import useSound from 'use-sound'
// import buttonclick from '../sounds/button-click.mp3' 

export default function Rules() {
   const history = useHistory()
   // const [buttonclick] = useSound('../sounds/button-click.mp3')

   return (
      <div className='Rules' >
         <Link to='/home'>
            <h1>Poké Duel</h1>
         </Link>
         <img src='https://i.imgur.com/0Bo95yc.png' alt='professor oak' />
         <Typewriter 
            onInit={(typewriter) => {
               typewriter
                  .typeString(`<p>Welcome trainers! We're so glad you've come to join us on this journey to becoming
                  a great Pokémon master. We'll start off in the main menu where we'll be able to choose
                  to start the game or add some more pokémon. When adding your pokémon make sure to hyphenate
                  the attacks you want to generate and seperate them with only a space. From there you'll be
                  taken to see and select your pokémon to battle. You'll notice this section is currently under
                  construction, while we work on it we'd love for you to reach out with any and all suggestions
                  on what we can do to improve. You know what they say, 'You Gotta Catch Them All!', and we intend
                  to.</p>`)
                  .callFunction(() => {
                     if(typewriter.typeString === !typewriter.typeString) {
                        history.push('/')
                     } else {
                        setTimeout(() => {
                           history.push('/home')
                        }, 2000)
                     }
                  })
                  .start()
            }
         }
         />
      </div>
   )
}
