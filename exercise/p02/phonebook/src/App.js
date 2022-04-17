import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1,
      name: 'Arto Hellas', 
      number: '123-42',
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  

  const addPerson = (event) => {    
    event.preventDefault()
    
    const personObject = {      
      id: persons.length + 1,
      name: newName.trim(),
      number: newNumber.trim(),
    }

    if ( !isPersonValid({ person: personObject }) ) {
      window.alert('invalid person');
      return;
    }
    

    if ( isNameAlreadyInPhonebook({name: newName}) ) {
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

  const isPersonValid = ({ person }) => {
    return person.name && person.number;
  }
 

  const handleNameChange = (event) => {  
    console.log(event.target.value);
    setNewName(event.target.value)  
  }

  const handleNumberChange = (event) => {  
    setNewNumber(event.target.value)  
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input 
            value={newNumber}
            onChange={handleNumberChange}
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