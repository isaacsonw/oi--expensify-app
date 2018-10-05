import React from  'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import  removeExpence  from '../AppStateManagement/actions/removeExpence'

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
  <Link to={`/edit/${id}`}><h6>{description}</h6></Link>
  <b>{amount} - {createdAt}</b>
  <button onClick={()=>{dispatch(removeExpence({id}))}}>remove</button>

  </div>
)

export default connect()(ExpenseListItem)