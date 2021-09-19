import CharacterDetails from './CharacterDetails'

export default function Battlegrounds() {
   return (
      <div>
         <Route path='/characterselect/:id'>
            <CharacterDetails />
         </Route>
      </div>
   )
}
