import { useState } from "react";
import Watch from "./Watch";

const AddWatch = () => {
  const [value, setValue] = useState();
  const [time, setTime] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    setValue("");
    setTime([...time, <Watch title={value} />]);
  }

  function convertor() {
    return value === "New York"
      ? "-5 GMT"
      : value === "Moscow"
      ? "+3 GMT"
      : value === "London"
      ? "+0 GMT"
      : value === "Tokyo"
      ? "+9 GMT"
      : "Timezone";
  }

  return (
    <>
      <form className="add-watch">
        <input
          value={value}
          name="city"
          list="cities"
          onChange={(event) => setValue(event.target.value)}
          placeholder="Select city"
        />
        <datalist id="cities">
          <option value="New York" />
          <option value="Moscow" />
          <option value="London" />
          <option value="Tokyo" />
        </datalist>

        <div className="info-time">{convertor()}</div>

        {convertor() !== "Timezone" ? (
          <button onClick={handleClick}>ADD</button>
        ) : (
          <button onClick={(e) => e.preventDefault()}>ADD</button>
        )}
      </form>

      <div className="watch-bar">{time}</div>
    </>
  );
};

export default AddWatch;
