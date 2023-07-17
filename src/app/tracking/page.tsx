import { getTracking } from "./TrackingService";

const Tracking = async () => {
  const trackings = await getTracking(2023, 7);

  return (
    <div>
      <h1>Tracking</h1>
      <table>
        <thead>
          <tr>
            <th>Account</th>
            <th>Expected</th>
            <th>Spend</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {trackings.map((tracking) => {
            return (
              <tr key={tracking.account.id}>
                <td>{tracking.account.name}</td>
                <td>{tracking.expected}</td>
                <td>{tracking.spend}</td>
                <td>{(tracking.spend / tracking.expected) * 100}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tracking;
