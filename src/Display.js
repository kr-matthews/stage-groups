/* Stolen (and modified) with permission from https://github.com/timreyn/usnationals/tree/master/src/static */

export default function Display() {
  return (
    <table align="center">
      <tbody>
        <tr>
          <th>Stage</th>
          <th>Right Now</th>
          <th>Next up</th>
        </tr>
        <tr id="r">
          <td className="name">Red</td>
          <td className="current">
            <span className="icon"></span>
            <span className="eventname"></span>
          </td>
          <td className="nextevent">
            <span className="icon"></span>
            <span className="eventname"></span>
          </td>
        </tr>
        <tr id="b">
          <td className="name">Blue</td>
          <td className="current">
            <span className="icon"></span>
            <span className="eventname"></span>
          </td>
          <td className="nextevent">
            <span className="icon"></span>
            <span className="eventname"></span>
          </td>
        </tr>
        <tr id="g">
          <td className="name">Green</td>
          <td className="current">
            <span className="icon"></span>
            <span className="eventname"></span>
          </td>
          <td className="nextevent">
            <span className="icon"></span>
            <span className="eventname"></span>
          </td>
        </tr>
        <tr id="o">
          <td className="name">Orange</td>
          <td className="current">
            <span className="icon"></span>
            <span className="eventname"></span>
          </td>
          <td className="nextevent">
            <span className="icon"></span>
            <span className="eventname"></span>
          </td>
        </tr>
        <tr id="y">
          <td className="name">Yellow</td>
          <td className="current">
            <span className="icon"></span>
            <span className="eventname"></span>
          </td>
          <td className="nextevent">
            <span className="icon"></span>
            <span className="eventname"></span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
