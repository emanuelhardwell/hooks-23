import { useState } from "react";

export const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = counter;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5">
          <h1>App</h1>
          <hr />
          <ul>
            <li>counter1: {counter1}</li>
            <li>counter2: {counter2}</li>
            <li>counter3: {counter3}</li>
          </ul>

          <button
            className="btn btn-primary"
            onClick={() => setCounter({ ...counter, counter1: counter1 + 1 })}
          >
            +1
          </button>
        </div>
      </div>
    </div>
  );
};
