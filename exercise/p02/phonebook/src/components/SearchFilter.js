import React from 'react'

const filterPersons = ({ searchString, persons }) => {
  const search = searchString.trim();
  if (search.length === 0) {
    return persons;
  }

  return persons.filter(person => 
    person.name.toLowerCase().includes(search))
}


const SearchFilter = ({ searchString, searchStringChangeHandler, persons }) => {

  return (
    <div>
      filter shown containing: 
      <input 
        value={searchString}
        onChange={searchStringChangeHandler}
      />
    </div>
  )
}

export { SearchFilter, filterPersons }