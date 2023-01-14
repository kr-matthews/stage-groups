import Display from "./Display";
import { groups } from "./Data";
import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import Event from "./Events";

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

  const currentGroupNeedsHelp =
    !!groups[Math.min(location, groups.length - 2)].round;
  const currentGroupNeedsQuiet = [
    Event.e3b,
    Event.e4b,
    Event.e5b,
    Event.e3f,
  ].includes(groups[Math.min(location, groups.length - 2)].event);

  return (
    <div className="App">
      <header className="App-header">{/* <h1>{COMP_NAME}</h1> */}</header>
      <Display
        current={groups[Math.min(location, groups.length - 2)]}
        next={groups[Math.min(location, groups.length - 2) + 1]}
      />
      {currentGroupNeedsQuiet && (
        <h1 className="wifi">
          Please be quiet, competitors need to concentrate - no talking! Thanks.
        </h1>
      )}
      {currentGroupNeedsHelp && (
        <h1 className="wifi">
          There are no assigned judges for this group, please come up and help!
          Thanks.
        </h1>
      )}
      <h1 className="wifi">
        Thanks to our sponsor Cubing Out Loud - vending from 9:30 to 4:00.
      </h1>
      <h1 className="wifi">
        Wi-Fi: KpuGuest -- Live Results: Search "WCA Live"
      </h1>
    </div>
  );
}
