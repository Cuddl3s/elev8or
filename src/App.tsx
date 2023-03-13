import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Elevator, ElevatorControls } from "./Elevator";

/**
 * Waits for the specified amount of milliseconds
 * @param ms
 */
const waitFor = (ms: number) => new Promise<void>((resolve) => setTimeout(() => resolve(),ms))

function App() {
  const [queue, setQueue] = useState<number[]>([]);
  const [currentLevel, setCurrentLevel] = useState(0);
  const elevatorRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false)

  const addToButtonQueue = (newLevel: number) => {
    //
    // Here you have to create a new queue that also includes the given newLevel,
    // and set your queue to the new value
    setQueue(oldQueue => [...oldQueue, newLevel])
  };

  useEffect(() => {
    // This fires whenever our queue changes

    // First we need a check: When our queue is empty, we don't want anything to happen
    const queueIsEmpty = queue.length === 0;
    if (queueIsEmpty) return;
    // If the queue is not empty (if something has been added to it for example)
    // We want the elevator to move to the next destination after a set amount of time
    const timeUntilTheElevatorMovesInMS = 1000; // 1 second
    const timeOut = setTimeout(() => {
      // Here, we want to set the current level to an element in the queue (but dont't remove it from the queue yet)
      // The removing will be done when the elevator reaches the floor
      setCurrentLevel(queue[0])
    }, timeUntilTheElevatorMovesInMS);
    return () => {
      clearTimeout(timeOut);
    };
  }, [queue]);

  useEffect(() => {
    const currentElevatorRef = elevatorRef.current;
    // This function is put into a variable here so that we can remove the function reference in the cleanup function
    // returned from the useEffect
    const onReachFloor = async () => {
      // When we reach the destination floor, we want to remove that floor from our queue
      await waitFor(500)
      setOpen(true);
      await waitFor(2000)
      setOpen(false)
      await waitFor(500)
      setQueue(([_, ...rest]) => rest)
    };

    currentElevatorRef?.addEventListener("transitionend", onReachFloor);
    return () => {
      currentElevatorRef?.removeEventListener("transitionend", onReachFloor);
    };
  }, [currentLevel, elevatorRef]);

  return (
    <div className="App">
      <Elevator ref={elevatorRef} level={currentLevel} open={open} />
      <ElevatorControls
        currentLevel={currentLevel}
        queue={queue}
        addToButtonQueue={addToButtonQueue}
      />
    </div>
  );
}

export default App;
