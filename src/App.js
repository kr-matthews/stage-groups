import Display from "./Display";
import { groups } from "./Data";
import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

// const COMP_NAME = "Richmond Open Summer 2022";

export default function App() {
  const [location, setLocation] = useLocalStorage("loc", 0);

  useEffect(() => {
    function onKeyDown({ key }) {
      if (key === "ArrowLeft") {
        setLocation(Math.max(location - 1, 0));
      } else if (key === "ArrowRight") {
        setLocation(Math.min(location + 1, groups.length - 2)); // pairs location with location+1, so don't use last
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [location, setLocation]);

  return (
    <div className="App">
      <header className="App-header">{/* <h1>{COMP_NAME}</h1> */}</header>
      <Display
        current={groups[Math.min(location, groups.length - 2)]}
        next={groups[Math.min(location, groups.length - 2) + 1]}
      />
      <h1 className="wifi">
        Please consider donating to the Ukraine Humanitarian Relief Committee at
        the registration table.
      </h1>
      <h1 className="wifi">
        Wi-Fi: TBD || Password: TBD || Results: Seach "WCA Live"
      </h1>
    </div>
  );
}
