import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallange = ({ title, targettime }) => {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targettime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targettime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  const resetHandler = () => {
    setTimeRemaining(targettime * 1000);
  };

  const startHandler = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };

  const stopHandler = () => {
    dialog.current.open();
    clearInterval(timer.current);
  };

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targettime}
        remainingTime={timeRemaining}
        onReset={resetHandler}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targettime} second{targettime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? stopHandler : startHandler}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Time inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallange;
