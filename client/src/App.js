import './App.css';
import { Header } from './components/header';
import { Balance } from './components/balance';
import { IncomeExpense } from './components/IncomeExpense'
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='conatiner'>
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
