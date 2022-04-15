import { useState } from 'react'

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => (
    <button onClick={ onClick }>
      {text}
    </button>
  )



const App = () => {
  // useState hook to create and init app state 
  const [ counter, setCounter ] = useState(0)

  // event handler methods
  const incrementCounter = () => setCounter(counter + 1)
  const decreaseCounter = () => setCounter(counter -1)
  const resetCounter = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={ incrementCounter } text='+1'/>
      <Button onClick={ decreaseCounter } text='-1'/>
      <Button onClick={ resetCounter } text=' 0 '/>     
    </div>
  )
}

export default App