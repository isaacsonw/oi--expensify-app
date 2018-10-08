import React from 'react'
import { Link } from 'react-router-dom'
import ExpensesList from './ExpensesList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'

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
          <ExpensesSummary />
              <ExpensesList />
    </div>
  )

  export default AppDashBoard
