import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [newSearchString, setNewSearchString] = useState('')
  

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

  const handleSearchStringChange = (event) => {  
    setNewSearchString(event.target.value)  
  }

  const filterPersons = ({ searchString }) => {
    const search = searchString.trim();
    if (search.length === 0) {
      return persons;
    }

    return persons.filter(person => 
      person.name.toLowerCase().includes(search))
  }

  const personsDisplayed = filterPersons({ searchString: newSearchString })

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter shown containing: 
          <input 
            value={newSearchString}
            onChange={handleSearchStringChange}
          />
        </div>

      <h2>add new</h2>
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
        { personsDisplayed.map((person) => 
          <Person 
            key={person.id} 
            person={person} 
          />)
        }
    </div>
  )
}

export default App