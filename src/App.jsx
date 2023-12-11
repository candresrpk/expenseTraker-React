import { GlobalProvider } from './context/GlobalState'
import Header  from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionList from './components/transactions/TransactionList'
import ExpensesChart from './components/ExpensesChart'


function App() {

  return (
    <GlobalProvider>
      <div className='bg-zinc-950 text-white h-screen flex justify-center items-center'>
        <div className="container mx-auto w3/6">
          <div className='bg-zinc-800 p-10 rounded-lg flex gap-x-2'>
            <div className=''>
              <h1 className='text-4xl font-bold'>Expenses traker</h1>
              <Header/>
              <IncomeExpenses/>
              <Balance/>
              <TransactionForm/>

            </div>
            <div className='flex flex-col'>
              <TransactionList/>
              <ExpensesChart/>
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App
