import React from 'react'


const isNameAlreadyInPhonebook = ({ name, persons }) => {
  return persons.filter( p => 
    p.name.toLowerCase() === name.trim().toLowerCase()
  ).length>0
}

const isPersonValid = ({ person }) => {
  return person.name && person.number;
}

const addPerson = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber }) => ( event ) => {    
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
  
  if ( isNameAlreadyInPhonebook({ name: personObject.name, persons }) ) {
      window.alert(`${personObject.name} is already added to phonebook`);
      return;
  }      

  setPersons(persons.concat(personObject))
  setNewName('')
  setNewNumber('')
}

const PersonForm = ({ 
  newName, nameChangeHandler, setNewName, 
  newNumber, numberChangeHandler, setNewNumber,
  persons, setPersons }) => {
  
  
  return (
    <form onSubmit={addPerson( {
      persons, 
      setPersons, 
      newName, 
      setNewName, 
      newNumber, 
      setNewNumber})}>
    <div>
      name: <input 
        value={newName}
        onChange={nameChangeHandler}
      />
    </div>
    <div>
      number: <input 
        value={newNumber}
        onChange={numberChangeHandler}
      />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

export default PersonForm