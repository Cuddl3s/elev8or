import { CSSProperties } from "react";
import styles from "./Elevator.module.css";

const FLOOR_AMOUNT = 3;

export const Elevator = ({ level }: { level: number }) => (
  <div
    className={styles.elevatorShaft}
    style={
      {
        "--floors": FLOOR_AMOUNT,
      } as CSSProperties
    }
  >
    <div
      className={styles.elevator}
      style={
        {
          "--currentFloor": level,
        } as CSSProperties
      }
    />
  </div>
);

export const ElevatorControls = ({
  setCurrentLevel,
}: {
  setCurrentLevel: (level: number) => void;
}) => {
  const floorButtons = [];
  for (let i = FLOOR_AMOUNT - 1; i >= 0; i--) {
    let elevatorIsAtThisFloor = false;
    floorButtons.push(
      <button
        onClick={() => setCurrentLevel(i)}
        className={styles.floorButton}
        key={i}
      >
        <div>
          <div className={styles.floorText}>Etage {i} </div>
          {elevatorIsAtThisFloor && <span className={styles.floorLight} />}
        </div>
      </button>
    );
  }

  return <div className={styles.floorButtons}>{floorButtons}</div>;
};
