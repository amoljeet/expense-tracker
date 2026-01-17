export default function HistoryList() {
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        <li className="minus">
          Cash <span>- $50.00</span>
          <button className="delete-btn">x</button>
        </li>
        <li className="plus">
          Salary <span>+ $500.00</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </div>
  )
}