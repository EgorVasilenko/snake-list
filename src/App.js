import { useState } from "react";
import "./App.scss";

function App() {
  const [size, setSize] = useState(8);
  const [count, setCount] = useState(10);
  return (<>
    <label>Size per row:</label><input value={size} onChange={(e) => setSize(+e.target.value)} type="number" step="1" min={2} max="10" />
    <br/>
    <br/>
    <br/>
    <label>Count:</label><input value={count} onChange={(e) => setCount(+e.target.value)} type="number" step="1" />
    <br/>
    <br/>
    <br/>
    <div className={`container container--${size}`}>
      {new Array(count).fill(0).map((item,i) => <div className="item" key={i}>{i + 1}</div>)}
    </div>
    </>
  );
}

export default App;
