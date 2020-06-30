import React, { useState } from "react";
import './EightBall.css';

function EightBall(props) {

  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");


  let [greenCount, setGreenCount] = useState(0);
  let [redCount, setRedCount] = useState(0);
  let [goldenrodCount, setGoldenrodCount] = useState(0);

  // refactor
  // let [count, setCount] = useState({green: 0, red: 0, goldenrod: 0})


  function handleBallClick() {
    let ans = randAns(props.answers);
    setColor(ans.color);
    setMsg(ans.msg);
    if (ans.color === "green") {
      // does ++ not work because it is adding 1 to a variable and then reassigning to itself in the argument being passed in?
      setGreenCount(greenCount + 1);
    }
    else if (ans.color === "goldenrod") {
      setGoldenrodCount(goldenrodCount + 1);
    } else {
      setRedCount(redCount + 1);
    }
  }

  function handleReset() {
    setColor("black");
    setMsg("Think of a Question")
    setGreenCount(0);
    setRedCount(0);
    setGoldenrodCount(0);
  }

  return <div>
    <div id="ball" onClick={handleBallClick} style={{ backgroundColor: color, color: "white" }}>
      <p>{msg}</p>
    </div >
    <div>
      <p><b>green count: </b> {greenCount}</p>
      <p><b>goldenrod count: </b> {goldenrodCount}</p>
      <p><b>red count: </b> {redCount}</p>
    </div>
    <button onClick={handleReset}>Reset</button>
  </div>

}


// takes in array of answer objects
// returns random object from input array
function randAns(answers) {
  let randIdx = Math.floor(Math.random() * answers.length);
  return answers[randIdx];
}

EightBall.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]
}

export default EightBall;