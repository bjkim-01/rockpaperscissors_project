import { useState } from 'react';
import './App.css';
import Box from './component/Box';
import { GiRock } from "react-icons/gi";
import { FaCrown, FaHandPaper, FaHandScissors, FaRobot, FaUserTie } from "react-icons/fa";

const choice = {
  rock: {
    name: "Rock",
    icon: <GiRock title="바위" />,
  },
  paper: {
    name: "Paper",
    icon: <FaHandPaper title="보" />,
  },
  scissors: {
    name: "Scissors",
    icon: <FaHandScissors title="가위" />,
  },
}

function App() {
  const [count, setCount] = useState(0);

  const [userWinCount, setUserWinCount] = useState(0);
  const [computerWinCount, setComputerWinCount] = useState(0);

  const [result, setResult] = useState("");

  const [userSelection, setUserSelection] = useState(null);
  const [computerSelection, setComputerSelection] = useState(null);

  const play = (userChoice) => {
    setCount(count+1)

    setUserSelection(choice[userChoice]);
    let computerChoice = randomChoice()
    setComputerSelection(choice[computerChoice]);

    let judgementResult = judgement(choice[userChoice], choice[computerChoice]);

    if (judgementResult == "WIN") {
      setUserWinCount(userWinCount+1) 
    } else if (judgementResult == "LOSE") {
      setComputerWinCount(computerWinCount+1) 
    }

    setResult(judgementResult);
  }

  const judgement = (user, computer) => {
    console.log(user, computer)
    if (user.name == computer.name) {
      return "TIE"
    }
    else if (user.name == "Rock")
      return computer.name == "Scissors" ? "WIN" : "LOSE";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "WIN" : "LOSE";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "WIN" : "LOSE";
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    return itemArray[randomItem]
  }

  return (
    <div className="App">
      <h2>경기 수: {count} | 비김: {count - userWinCount - computerWinCount}</h2>
      <div className="ResultBoard">
        <h2>{userWinCount > computerWinCount ? <FaCrown color='gold'/> : ""} <FaUserTie /> | {userWinCount}</h2>
        <h2>vs</h2>
        <h2>{computerWinCount} | <FaRobot /> {userWinCount < computerWinCount ? <FaCrown color='gold'/> : ""}</h2>
      </div>

      <div className="Container">
        <Box name="You" selection={userSelection} result={result}/>
        <Box name="Computer" selection={computerSelection} result={result}/>
      </div>

      <div className='Container2'>
        <button onClick={() => play("scissors")}><FaHandScissors title="가위" color="#555" /></button>
        <button onClick={() => play("rock")}><GiRock title="바위" color="#555" /></button>
        <button onClick={() => play("paper")}><FaHandPaper title="보" color="#555" /></button>
      </div>
    </div>
  );
}

export default App;
