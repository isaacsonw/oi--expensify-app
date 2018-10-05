import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import addExpense from '../AppStateManagement/actions/addExpense'


const AddExpense = (props) => (

    <div className="addExpense">
    <Link to='/dashboard'><button>dashbord</button></Link>
    <h1>Add An Expense</h1>
    <ExpenseForm onSubmitExpense={(expense) => {
      props.dispatch(addExpense(expense))
      props.history.push('/dashboard')
    }}/>

  </div>
)

export default connect()(AddExpense)
