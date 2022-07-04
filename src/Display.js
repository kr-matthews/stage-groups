// /* html stolen (and modified) with permission from https://github.com/timreyn/usnationals/tree/master/src/static */

const stages = ["Blue", "Red", "Green", "Orange", "Yellow"];
const ids = ["b", "r", "g", "o", "y"];

function eventText(name, round, attempt, group) {
  let str = ``;
  str += name;
  round && (str += `${round === "Final" ? `` : ` Round`} ${round}`);
  attempt && (str += ` Attempt ${attempt}`);
  group && (str += ` - Group ${group}`);
  return str;
}

export default function Display({ current, next }) {
  return (
    <table align="center">
      <tbody>
        <tr>
          <th>Stage</th>
          <th>Current Group</th>
          <th>Next up</th>
        </tr>
        {ids.map((id, index) => (
          <tr id={id} key={id}>
            <td className="name">{stages[index]}</td>
            {current[index].event ? (
              <td className="current">
                <span className="icon">
                  <img src={current[index].event.icon} alt={""}></img>
                </span>
                <span className="eventname">
                  {eventText(
                    current[index].event.name,
                    current[index].round,
                    current[index].attempt,
                    current[index].group
                  )}
                </span>
              </td>
            ) : (
              <td className="current"></td>
            )}
            {next[index].event ? (
              <td className="nextevent">
                <span className="icon">
                  <img src={next[index].event.icon} alt={""}></img>
                </span>
                <span className="eventname">
                  {eventText(
                    next[index].event.name,
                    next[index].round,
                    next[index].attempt,
                    next[index].group
                  )}
                </span>
              </td>
            ) : (
              <td className="nextevent"></td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
