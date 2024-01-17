import { useState, useRef } from "react";

const Watch = ({ title }) => {
  const [second, setSecond] = useState();
  const [minute, setMinute] = useState();
  const [hour, setHour] = useState();
  const ref = useRef(null);

  const updateClock = () => {
    setSecond(Date().slice(22, 24));
    setMinute(Date().slice(19, 21));
    setHour(
      title === "New York"
        ? Date().slice(16, 18) - 8
        : title === "Moscow"
        ? Date().slice(16, 18)
        : title === "London"
        ? Date().slice(16, 18) - 3
        : title === "Tokyo"
        ? Number(Date().slice(16, 18)) + Number(6)
        : undefined
    );
  };

  setTimeout(updateClock, 1000);

  function removeWatch() {
    ref.current.remove();
  }
  return (
    <>
      <div ref={ref} className="watch">
        <h2 className="watch_title">{title}</h2>
        <div
          className="watch_second-hand"
          style={{ transform: `rotate(${second * 6}deg)` }}
        ></div>
        <div
          className="watch_hour-hand"
          style={{
            transform: `rotate(${
              ((hour % 12) / 12) * 360 + 90 + minute / 12
            }deg)`,
          }}
        ></div>
        <div
          className="watch_minute-hand"
          style={{ transform: `rotate(${minute * 6 + second / 60}deg)` }}
        ></div>
        <button onClick={removeWatch}>💥</button>
      </div>
    </>
  );
};

export default Watch;
