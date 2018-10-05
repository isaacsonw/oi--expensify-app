import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import editExpense from '../AppStateManagement/actions/editExpense'


const EditExpense = (props) => (

  <div>
   <ExpenseForm
   expense={props.expense}
    onSubmitExpense={(expense) => {
      props.dispatch(editExpense(props.expense.id, expense))
      props.history.push('/dashboard')
    }}
   />
  </div>
)
const mapStateToProps = (state, props) => {
 return {
   expense: state.expences.find((expense) => expense.id === props.match.params.id)
 }
}
export default connect(mapStateToProps)(EditExpense)