import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {    
    event.preventDefault()
    
    const personObject = {
      name: newName.trim(),
      id: persons.length + 1,
    }

    if ( isNameAlreadyInPhonebook(newName) ) {
        window.alert(`${newName} is already added to phonebook`);
        return;
    }      

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const isNameAlreadyInPhonebook = ({ name }) => {
    return persons.filter( p => 
      p.name.toLowerCase() === name.trim().toLowerCase())
      .length > 0
  }
 

  const handlePersonChange = (event) => {  
    setNewName(event.target.value)  
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handlePersonChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        { persons.map((person) => 
          <Person 
            key={person.id} 
            person={person} 
          />)
        }
    </div>
  )
}

export default App