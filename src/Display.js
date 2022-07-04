// /* Stolen (and modified) with permission from https://github.com/timreyn/usnationals/tree/master/src/static */

const stages = ["Blue", "Red", "Green", "Orange", "Yellow"];
const ids = ["b", "r", "g", "o", "y"];

export default function Display({ current, next }) {
  console.debug("display");
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
                <span className="eventname">{`${current[index].event.name} - Group ${current[index].group}`}</span>
              </td>
            ) : (
              <td className="current"></td>
            )}
            {next[index].event ? (
              <td className="nextevent">
                <span className="icon">
                  <img src={next[index].event.icon} alt={""}></img>
                </span>
                <span className="eventname">{`${next[index].event.name} - Group ${next[index].group}`}</span>
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
