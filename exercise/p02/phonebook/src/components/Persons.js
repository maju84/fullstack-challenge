import React from 'react'

const Person = ({ person }) => {
  return (
    <p>{person.name} : {person.number}</p>
  )
}
const Persons = ({ personsDisplayed }) => {

  return (
    <>
    { personsDisplayed.map( person => 
        <Person 
          key={person.id} 
          person={person} 
        />)
    }
    </>
  )  
}



export default Persons;