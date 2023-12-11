import React from 'react'
import { useGlobalState } from '../../context/GlobalState'
import TransactionItem from './TransactionItem'


const TransactionList = () => {

    const {transactions} = useGlobalState()

  return (
    <>
        <h3 className="text-slate-500 text-xl font-bold block" >History</h3>
        <ul >
            {
                transactions.map(transaction => (
                    <TransactionItem item={transaction} key={transaction.id}/>
                ))
            }
        </ul>

    </>
  )
}

export default TransactionList