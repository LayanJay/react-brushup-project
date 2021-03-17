import React, { useState } from "react";

function Calculator() {
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();
  const [result, setResult] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(parseFloat(input1) + parseFloat(input2));
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <input
          className=""
          type="number"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <input
          type="number"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div>{result}</div>
    </div>
  );
}

export default Calculator;
