import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpense from './getVisibleExpense'

const ExpensesList = (props) => (
  <div>
  <h1>Expenses List</h1>

  {props.expences.map((expense) => {
   return <ExpenseListItem key={expense.id} {...expense} />
  })}

  </div>
)

const mapStateToProps = (state) => {
  return {
    expences: getVisibleExpense(state.expences, state.filters)

  }
}

export default connect(mapStateToProps)(ExpensesList)