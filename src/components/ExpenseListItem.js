import React from  'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import  removeExpence  from '../AppStateManagement/actions/removeExpence'
import moment from 'moment'
import numeral from 'numeral'





const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
  <Link to={`/edit/${id}`}><h6>{description}</h6></Link>
  <b>
      {numeral(amount / 100).format('$0,0.00')}
        -
      {moment(createdAt).format('MMMM Do, YYYY')}
  </b>
  <button onClick={()=>{dispatch(removeExpence({id}))}}>remove</button>
  </div>
)

//₦
export default connect()(ExpenseListItem)