import { useState } from "react";

const CounterFun = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count > 0 ? count - 1 : count);
  };

  return (
    <div className="col-6 mx-auto my-5 p-5 shadow-lg text-center">
      <h1 className="text-primary mb-5">Counter</h1>
      <h2 className="mb-3">{count}</h2>
      <button onClick={plus} className="btn btn-outline-success me-4">
        +
      </button>
      <button onClick={minus} className="btn btn-outline-danger">
        -
      </button>
    </div>
  );
};

export default CounterFun;
