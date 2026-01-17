export default function AddTransaction() {
  return (
    <div className="add-transaction-container">
      <h3>Add New Transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  )
}