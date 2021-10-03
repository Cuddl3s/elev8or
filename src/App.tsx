import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Elevator, ElevatorControls } from "./Elevator";

function App() {
  const [queue, setQueue] = useState<number[]>([]);
  const [currentLevel, setCurrentLevel] = useState(0);
  const elevatorRef = useRef<HTMLDivElement>(null);

  const addToButtonQueue = (newLevel: number) => {
    // Here you have to create a new queue that also includes the given newLevel,
    // and set your queue to the new value
  };

  useEffect(() => {
    const currentElevatorRef = elevatorRef.current;
    // This function is put into a variable here so that we can remove the function reference in the cleanup function
    // returned from the useEffect
    const onReachFloor = () => {
      // This fires as soon as the css transition is over
      // (that means, as soon as the elevator reaches its destination floor)
      // Here, you can set the next destination for the elevator.
      // So first check whether there are still destinations in your queue, and if so,
      // Remove one of them, set it as the current level and remove it from the queue.
      // When that works, only do it after a set time (so that the elevator stops at a floor, waits for x seconds,
      // and then goes to the next floor. BUT ONLY AFTER THE FIRST PART WORKS!
      console.log(`Reached floor ${currentLevel}`);
    };

    currentElevatorRef?.addEventListener("transitionend", onReachFloor);
    return () => {
      currentElevatorRef?.removeEventListener("transitionend", onReachFloor);
    };
  }, [currentLevel, elevatorRef]);

  return (
    <div className="App">
      <Elevator ref={elevatorRef} level={currentLevel} />
      <ElevatorControls
        currentLevel={currentLevel}
        queue={queue}
        addToButtonQueue={addToButtonQueue}
      />
    </div>
  );
}

export default App;
