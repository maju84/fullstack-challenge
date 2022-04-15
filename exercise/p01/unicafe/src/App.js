import { useState } from 'react'

const Button = ({ handleClick, text }) => (  
  <button onClick={handleClick}>    
    {text}  
  </button>
)

const Display = ({ text, value, unit='' }) => 
  <div>{text}: {value} {unit}</div> 


const Statistics = ({ good, neutral, bad }) => {
  const all = good+neutral+bad;
  const average = (good-bad) / all;
  
  return (
    <>
    <h1>statistics</h1>
    { all 
      ? 
      <>
      <Display text='good' value={good} />
      <Display text='neutral' value={neutral} />
      <Display text='bad' value={bad} />
      <Display text='all' value={all} />
      <Display text='average' value={average} />
      <Display text='positive' value={good*100 / all } unit='%' />
      </> 

      : null
    }
    </>
  )
}
 
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>
      <Button 
        handleClick={() => setGood(good+1)}
        text='good'
      />
      <Button 
        handleClick={() => setNeutral(neutral+1)}
        text='neutral'
      />
      <Button 
        handleClick={() => setBad(bad+1)}
        text='bad'
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />      
    </div>
  )
}

export default App