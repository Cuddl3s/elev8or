import React, { useState } from "react";
import "./App.css";
import { Elevator, ElevatorControls } from "./Elevator";

function App() {
  const [currentLevel, setCurrentLevel] = useState(0);
  return (
    <div className="App">
      <Elevator level={currentLevel} />
      <ElevatorControls setCurrentLevel={setCurrentLevel} />
    </div>
  );
}

export default App;
