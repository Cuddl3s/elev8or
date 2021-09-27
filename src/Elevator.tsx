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

export const ElevatorControls = () => {
  const floorButtons = [];
  for (let i = FLOOR_AMOUNT - 1; i >= 0; i--) {
    floorButtons.push(
      <button className={styles.floorButton} key={i}>
        Etage {i}
      </button>
    );
  }

  return <div className={styles.floorButtons}>{floorButtons}</div>;
};
