import { useState } from 'react';
import './App.css';
import Box from './component/Box';
import { GiRock } from "react-icons/gi";
import { FaHandPaper, FaHandScissors } from "react-icons/fa";

const choice = {
  rock: {
    name: "Rock",
    icon: <GiRock title="바위" color="#555" />,
  },
  paper: {
    name: "Paper",
    icon: <FaHandPaper title="보" color="#555" />,
  },
  scissors: {
    name: "Scissors",
    icon: <FaHandScissors title="가위" color="#555" />,
  },
}

function App() {
  const [count, setCount] = useState(0);
  const [yourSelection, setYourSelection] = useState(null);

  const play = (e) => {
    const userChoice = choice[e];
    setYourSelection(userChoice);
  }

  return (
    <div className="App">
      <div className="ResultBoard">
        <h1>2</h1>
        <h1>vs</h1>
        <h1>1</h1>
      </div>

      <div className="Container">
        <Box name="You" selection={yourSelection}/>
        <Box name="Computer" />
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
