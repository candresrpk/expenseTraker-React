import React from 'react'
import { useGlobalState } from '../../context/GlobalState'

const TransactionItem = ({item}) => {

    const {deleteTransaction} = useGlobalState()

  return (
    <li className='bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center'>
        <p className='text-sm'> {item.description}</p>
        <div>
            <span > ${item.amount}</span>

            <button onClick={() => {deleteTransaction(item.id)}}>
                X
            </button>
        </div>
    </li>
  )
}

export default TransactionItem