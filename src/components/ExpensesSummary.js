import React from 'react'
import numeral from 'numeral'
import { connect  } from 'react-redux'
import getVisibleExpense from './getVisibleExpense'
import totalExpense from './expense-total'


export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses'
    const expensesTotalFormat = numeral(expensesTotal / 100).format('$0,0.00')

return(
    <div>

        <h4>Viewing {expensesCount} {expenseWord} totalling {expensesTotalFormat}  </h4>
    </div>
)
}

const mapStateToProps = (state) => {
    const visibleExpense = getVisibleExpense(state.expences, state.filters)

    return {
        expensesCount: visibleExpense.length,
        expensesTotal: totalExpense(visibleExpense)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)