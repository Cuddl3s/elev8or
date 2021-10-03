import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Elevator, ElevatorControls } from "./Elevator";

function App() {
  const [queue, setQueue] = useState<number[]>([]);
  const [currentLevel, setCurrentLevel] = useState(0);
  const elevatorRef = useRef<HTMLDivElement>(null);

  const addToButtonQueue = (newLevel: number) => {
    //
    // Here you have to create a new queue that also includes the given newLevel,
    // and set your queue to the new value
  };

  useEffect(() => {
    // This fires whenever our queue changes

    // First we need a check: When our queue is empty, we don't want anything to happen
    const queueIsEmpty = false;
    if (queueIsEmpty) return;
    // If the queue is not empty (if something has been added to it for example)
    // We want the elevator to move to the next destination after a set amount of time
    const timeUntilTheElevatorMovesInMS = 1000; // 1 second
    const timeOut = setTimeout(() => {
      // Here, we want to set the current level to an element in the queue (but dont't remove it from the queue yet)
      // The removing will be done when the elevator reaches the floor
    }, timeUntilTheElevatorMovesInMS);
    return () => {
      clearTimeout(timeOut);
    };
  }, [queue]);

  useEffect(() => {
    const currentElevatorRef = elevatorRef.current;
    // This function is put into a variable here so that we can remove the function reference in the cleanup function
    // returned from the useEffect
    const onReachFloor = () => {
      // When we reach the destination floor, we want to remove that floor from our queue
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
