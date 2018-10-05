import React from 'react'
import { Link } from 'react-router-dom'
import ExpensesList from './ExpensesList'
import ExpenseListFilters from './ExpenseListFilters'

const AppDashBoard = () => (

      <div className="app__text-dashboard">
        <h5>
          <span>Welcome</span> Mr. Sarri
          </h5>
          <small>
            Keep track of your daily, weekly, monthly and yearly expenditure
          </small>
          <ExpenseListFilters />
          <Link to='/add'><button>add</button></Link>
              <ExpensesList />
    </div>
  )

  export default AppDashBoard
