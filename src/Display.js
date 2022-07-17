// /* html stolen (and modified) with permission from https://github.com/timreyn/usnationals/tree/master/src/static */

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
          <th>Current</th>
          <th>Next</th>
        </tr>
        <tr>
          {current.event ? (
            <td className="current">
              <span className="icon">
                <img
                  className="icon-img"
                  src={current.event.icon}
                  alt={""}
                ></img>
              </span>
              <span className="eventname">
                {eventText(
                  current.event.name,
                  current.round,
                  current.attempt,
                  current.group
                )}
              </span>
            </td>
          ) : (
            <td className="current"></td>
          )}
          {next.event ? (
            <td className="nextevent">
              <span className="icon">
                <img className="icon-img" src={next.event.icon} alt={""}></img>
              </span>
              <span className="eventname">
                {eventText(
                  next.event.name,
                  next.round,
                  next.attempt,
                  next.group
                )}
              </span>
            </td>
          ) : (
            <td className="nextevent"></td>
          )}
        </tr>
      </tbody>
    </table>
  );
}
