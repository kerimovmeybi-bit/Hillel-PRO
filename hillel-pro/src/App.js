import { useState, useEffect } from "react";
import EmojiList from "./components/EmojiList";
import Winner from "./components/Winner";
import "./App.css";

const emojis = ["😀","😊","😎","🤩","😍"];

function App() {

  const [votes,setVotes] = useState(()=>{
    const saved = localStorage.getItem("votes");
    return saved ? JSON.parse(saved) : [0,0,0,0,0];
  });

  const [winner,setWinner] = useState(null);

  useEffect(()=>{
    localStorage.setItem("votes",JSON.stringify(votes));
  },[votes]);

  const handleVote = (index)=>{
    const newVotes=[...votes];
    newVotes[index]++;
    setVotes(newVotes);
  };

  const showResults = ()=>{

    const max = Math.max(...votes);
    const index = votes.indexOf(max);

    setWinner({
      emoji:emojis[index],
      votes:max
    });

  };

  const clearResults = ()=>{
    setVotes([0,0,0,0,0]);
    setWinner(null);
    localStorage.removeItem("votes");
  };

  return (
    <div className="container">

      <h1>Голосування за найкращий смайлик</h1>

      <EmojiList
        emojis={emojis}
        votes={votes}
        onVote={handleVote}
      />

      <div className="buttons">

        <button onClick={showResults}>
          Show Results
        </button>

        <button onClick={clearResults}>
          Очистити результати
        </button>

      </div>

      <Winner winner={winner}/>

    </div>
  );
}

export default App;