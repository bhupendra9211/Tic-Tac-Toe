import React, { useState } from 'react';
import './App.css';
import Block from './components/Block';

function App() {
  const[state,SetState]=useState(Array(9).fill(null));
  const[currentTurn,SetCurrentTurn]=useState("X")

  const handleBlockClick = (index: number) =>{
   const stateCopy = Array.from(state)
   stateCopy[index]=currentTurn;
   SetCurrentTurn(currentTurn === "X" ? "0" : "X");
   SetState(stateCopy);
  }
  return (
    <div className="board">
      <div className="row">
        <Block onClick={()=>handleBlockClick(0)} value={state[0]} />
        <Block onClick={()=>handleBlockClick(1)} value={state[1]} />
        <Block onClick={()=>handleBlockClick(2)} value={state[2]} />
      </div>
      <div className="row">
        <Block onClick={()=>handleBlockClick(3)} value={state[3]} />
        <Block onClick={()=>handleBlockClick(4)} value={state[4]} />
        <Block onClick={()=>handleBlockClick(5)} value={state[5]} />
      </div>
      <div className="row">
        <Block onClick={()=>handleBlockClick(6)} value={state[6]} />
        <Block onClick={()=>handleBlockClick(7)} value={state[7]} />
        <Block onClick={()=>handleBlockClick(8)} value={state[8]} />
      </div>
    </div>
  );
}

export default App;
