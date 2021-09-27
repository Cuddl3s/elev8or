import React from "react";
import "./App.css";
import { Elevator, ElevatorControls } from "./Elevator";

function App() {
  return (
    <div className="App">
      <Elevator level={0} />
      <ElevatorControls />
    </div>
  );
}

export default App;
