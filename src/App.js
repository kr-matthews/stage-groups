import Display from "./Display";
import { useEffect } from "react";

function App() {
  function onBackHandler({ key }) {
    if (key === "ArrowLeft") {
      console.debug("left");
    }
  }
  function onForwardHandler({ key }) {
    if (key === "ArrowRight") {
      console.debug("right");
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", onBackHandler);
    window.addEventListener("keydown", onForwardHandler);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stage Groups</h1>
      </header>
      <Display />
    </div>
  );
}

export default App;
