import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onPress}>
    {props.text}
  </button>
)
const Display = (props) => (
  <div>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <p>has {props.showVotes} votes</p>
  </div>
)
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const arrLength = anecdotes.length
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(arrLength))

  const getRandomInt = (max) => {
    const theInt = Math.floor(Math.random() * max)
    //console.log(theInt)
    return theInt
  }
  const nextRandom = () => {
    const randomNum = getRandomInt(arrLength)
    setSelected(randomNum)
    console.log("random number is ", randomNum)
  }
  const addVote = () => {
    const copy = [...points]
    copy[selected]++
    setPoints(copy)
    console.log('points array now contains ', copy)
    console.log('voting for position number: ', selected)
    console.log('points are ', copy[selected])
    console.log('the largest is now at position ', copy.indexOf(Math.max(...copy)))
  }
  const theMostVoted = Math.max(...points)
  return (
    <div>
      <Display title='Anecdotes of the day' content={anecdotes[selected]} showVotes={points[selected]} />
      <Button text='Vote' onPress={addVote} />
      <Button text='Next anecdote' onPress={nextRandom} />
      <Display title='Anecdotes with most votes' content={anecdotes[points.indexOf(theMostVoted)]} showVotes={theMostVoted} />
    </div>
  )
}

export default App