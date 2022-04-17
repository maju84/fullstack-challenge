import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import { SearchFilter, filterPersons } from './components/SearchFilter'



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

  const personsDisplayed = filterPersons({ searchString: newSearchString, persons })

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter 
        searchString={newSearchString}
        searchStringChangeHandler={handleSearchStringChange}
      />

      <h3>add new</h3>
      <PersonForm
         newName={newName}
         nameChangeHandler={handleNameChange}
         setNewName={setNewName}
         newNumber={newNumber}
         numberChangeHandler={handleNumberChange}
         setNewNumber={setNewNumber}
         persons={persons}
         setPersons={setPersons}
      />      

      <h3>Numbers</h3>
      <Persons personsDisplayed={personsDisplayed} />        
    </div>
  )
}

export default App