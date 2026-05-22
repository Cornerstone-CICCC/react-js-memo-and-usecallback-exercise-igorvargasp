import { useState } from "react";
import Profile from "./Profile";
import ProductList from "./ProductList";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>memo and useCallback Exercise</h1>

      <button onClick={() => setCount((c) => c + 1)}>
        Count is {count}
      </button>

      <Profile firstname="John" lastname="Doe" />

      <hr />

      <ProductList />
    </div>
  );
}

export default App;
