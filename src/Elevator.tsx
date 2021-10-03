import { CSSProperties, ForwardedRef, forwardRef } from "react";
import styles from "./Elevator.module.css";

const FLOOR_AMOUNT = 3;

// Explanation for the ref: refs are kind of how you get a certain HTML element the "react way".
// You don't use document selectors like getElementById etc., but you create a ref(erence) by using useRef,
// and you set that as a prop onto an HTML element. That ref will then hold a reference to the HTML element in it's
// 'current' value (so you can access it by using ref.current). This is how you set listeners etc on HTML elements.
export const Elevator = forwardRef(
  (
    {
      level,
    }: {
      level: number;
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => (
    <div
      className={styles.elevatorShaft}
      style={
        {
          "--floors": FLOOR_AMOUNT,
        } as CSSProperties
      }
    >
      <div
        ref={ref}
        className={styles.elevator}
        style={
          {
            "--currentFloor": level,
          } as CSSProperties
        }
      />
    </div>
  )
);

export const ElevatorControls = ({
  currentLevel,
  addToButtonQueue,
  queue,
}: {
  currentLevel: number;
  addToButtonQueue: (level: number) => void;
  queue: number[];
}) => {
  const floorButtons = [];
  for (let i = FLOOR_AMOUNT - 1; i >= 0; i--) {
    const elevatorIsAtThisFloor = i === currentLevel;
    const buttonIsPressed = queue.includes(i);
    floorButtons.push(
      <button
        disabled={elevatorIsAtThisFloor || buttonIsPressed}
        onClick={() => addToButtonQueue(i)}
        className={styles.floorButton}
        key={i}
      >
        <div>
          <div className={styles.floorText}>Etage {i} </div>
          {buttonIsPressed && <span className={styles.floorLight} />}
        </div>
      </button>
    );
  }

  return <div className={styles.floorButtons}>{floorButtons}</div>;
};
