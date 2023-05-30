import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  
  const setToZero = () => setCounter(0)

  const Display = (props) => {
    return (
      <div>{props.counter}</div>
    )
  }

  const Button = (props) => {
    return (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    )
  }

  return (
    <div>
    <Display counter={counter}/>
    <button onClick={increaseByOne}>
    plus
  </button>
  <button onClick={setToZero}> 
        zero
      </button>
  </div>
  )
}

export default App