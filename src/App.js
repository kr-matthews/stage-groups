import Display from "./Display";
import { groups } from "./Data";
import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export default function App() {
  const [location, setLocation] = useLocalStorage("loc", 0);

  function onKeyDown({ key }) {
    if (key === "ArrowLeft") {
      setLocation(Math.max(location - 1, 0));
    } else if (key === "ArrowRight") {
      setLocation(Math.min(location + 1, groups.length - 2)); // pairs location with location+1, so don't use last
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stage Groups</h1>
      </header>
      <Display current={groups[location]} next={groups[location + 1]} />
    </div>
  );
}
