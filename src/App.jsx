import './app.css'
import Header from './Components/Header'
import Balance from './Components/Balance'
import IncomeExpenditure from './Components/IncomeExpenditure'
import HistoryList from './Components/HistoryList'
import AddTransaction from './Components/AddTransaction'

import { GlobalProvider } from './context/GlobalState'
const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenditure />
        <HistoryList />
        <AddTransaction />
      </div>
    </GlobalProvider>  
  )
}

export default App