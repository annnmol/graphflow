import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>GraphFlow</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
};

export default App;
