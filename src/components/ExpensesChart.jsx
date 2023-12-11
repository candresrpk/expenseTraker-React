import React from 'react'
import {VictoryPie, VictoryLabel} from 'victory'

const ExpensesChart = () => {
  return (
    <VictoryPie colorScale={['#e74cec', '#2ecc71' ]} data = {[
      {x: "Expenses", y: 35},
      {x: "Incomes", y:40}
    ]} 

    animate ={{
      duration: 2000
    }}
    labels={({datum}) => datum.y}
    labelComponent={<VictoryLabel angle={45} style={{fill:"white"}} />}
    >
      
    </VictoryPie>
  )
}

export default ExpensesChart