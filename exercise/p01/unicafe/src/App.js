import { useState } from 'react'

const Button = ({ handleClick, text }) => (  
  <button onClick={handleClick}>    
    {text}  
  </button>
)

const Display = ({ text, value, unit='' }) => 
  <div>{text}: {value} {unit}</div> 

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)



  const clickedGood = () => {
    setGood(good+1)
    const newAll = all+1;
    setAll(newAll)
    setAverage( (good+1-bad) / newAll )
  }

  const clickedNeutral = () => {
    setNeutral(neutral+1)
    const newAll = all+1;
    setAll(newAll)
    setAverage( (good-bad) / newAll )
  }

  const clickedBad = () => {
    setBad(bad+1)
    const newAll = all+1;
    setAll(newAll)
    setAverage( (good-bad-1) / newAll )
  }

 

  return (
    <div>
      <h1>give feedback</h1>
      <Button 
        handleClick={clickedGood}
        text='good'
      />
      <Button 
        handleClick={clickedNeutral}
        text='neutral'
      />
      <Button 
        handleClick={clickedBad}
        text='bad'
      />

      <h1>statistics</h1>
      <Display text='good' value={good} />
      <Display text='neutral' value={neutral} />
      <Display text='bad' value={bad} />
      <Display text='all' value={good+neutral+bad} />
      <Display text='average' value={average} />
      <Display text='positive' value={good*100 / (all?all:1) } unit='%' />
    </div>
  )
}

export default App