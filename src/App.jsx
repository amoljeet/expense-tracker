import './app.css'
import Header from './Components/Header'
import Balance from './Components/Balance'
import IncomeExpenditure from './Components/IncomeExpenditure'
import HistoryList from './Components/HistoryList'
import AddTransaction from './Components/AddTransaction'
const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenditure />
        <HistoryList />
        <AddTransaction />
      </div>
    </>  
  )
}

export default App