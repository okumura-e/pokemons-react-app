import { useState } from "react";
import Layout from "../../components/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Layout>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Layout>
    </>
  );
}

export default App;