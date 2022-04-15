import { useState } from 'react'

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => {
    
    // in React state change must be done by setting a new object and nothing else!

    setClicks({   // all of clicks, then left is overwritten
      ...clicks,
      left: clicks.left + 1
    })
  }

  const handleRightClick = () => {
    setClicks( { 
      ...clicks,
      right: clicks.right + 1 
    })
  }

  return (
    <div>
      {clicks.left}
      <button onClick={ handleLeftClick }>
        left
      </button>
      <button onClick={ handleRightClick }>
        right
      </button>
      {clicks.right}
    </div>
  )
}

export default App