import { useState } from 'react'
// this app.js file contains some redundant code that have been updated/amended during learning 
// they are used only for records of some evidences for learning progress
const Button = (props) =>
(<button onClick={props.addFeedback}>
  {props.text}
</button>)

// const Display = (props) =>
//  ( <div>
//     {props.text} {props.feedbackNums}
//   </div>
// )
const Statistics = (props) => {
  console.log("String includes ", props.figureNums)
  const isZero = (num) => num === 0;
  if (props.figureNums.every(isZero)) {
    return (<div>
      No feeback given
    </div>)
  }
  else {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            {/* <tr>
      <td>{props.text[0]}</td>
      <td>{props.figureNums[0]}</td>
    </tr>
    <tr>
      <td>{props.text[1]}</td>
      <td>{props.figureNums[1]}</td>
    </tr>
    <tr>
      <td>{props.text[2]}</td>
      <td>{props.figureNums[2]}</td>
    </tr>
    <tr>
      <td>{props.text[3]}</td>
      <td>{props.figureNums[3]}</td>
    </tr>
    <tr>
      <td>{props.text[4]}</td>
      <td>{props.figureNums[4]}</td>
    </tr>
    <tr>
      <td>{props.text[5]}</td>
      <td>{props.figureNums[5]}</td>
    </tr> */}
            {props.figureNums.map((figureNum, index) => (
              <tr key={index}>
                <td>{props.text[index]}</td>
                <td>{figureNum}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // const increaseGood = ()=>()=>{
  // const newGood = good+1
  //  setGood(newGood)
  //   console.log('Good increased to',newGood)
  // }
  // const increaseNeutral= ()=>()=>{
  //   const newNeutral = neutral+1
  //   setNeutral(newNeutral)
  //    console.log('Neutral increased to',newNeutral)

  //  }
  //  const increaseBad = ()=>()=>{
  //   const newBad = bad+1
  //   setBad(newBad)
  //    console.log('Bad increased to',newBad)
  //  }
  var all = good + bad + neutral
  var average = (good - bad) / all
  var positive = (good / all) * 100

  const parseNum = (num) => {
    if (isNaN(num)) {
      return 0
    }
    else if (num === positive) {
      console.log(num)
      num = parseFloat(num).toFixed(1) + '%'
      return num
    }
    else if (num === average) {
      num = parseFloat(num).toFixed(1)
      return num
    }
  }

  average = parseNum(average)
  positive = parseNum(positive)

  const addFeedback = (feedBack, setFeedback) => () => {
    feedBack = feedBack + 1
    setFeedback(feedBack)
  }

  const options = ['Good', 'Neutral', 'Bad', 'All', 'Average', 'Positive']
  const feedBacksNum = [good, neutral, bad, all, average, positive]
  
  // const feedBacks =[
  //   {option:'Good', feedBacksNum:good},
  //   {option:'Neutral', feedBacksNum:neutral},
  //   {option:'Bad', feedBacksNum:bad},
  //   {option:'All', feedBacksNum:all},
  //   {option:'Positive', feedBacksNum:average},
  // ] this is just something that is not working
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button addFeedback={addFeedback(good, setGood)} text='Good' />
      <Button addFeedback={addFeedback(neutral, setNeutral)} text='Neutral' />
      <Button addFeedback={addFeedback(bad, setBad)} text='Bad' />
      <Statistics text={options} figureNums={feedBacksNum} />

      {/* <Statistics text='Neutral'feedbackNums={neutral}/>
      <Statistics text='Bad'feedbackNums={bad}/>
      <Statistics text='All'feedbackNums={all}/>
      <Statistics text='Average'feedbackNums={average}/> */}
    </div>
  )
}

export default App