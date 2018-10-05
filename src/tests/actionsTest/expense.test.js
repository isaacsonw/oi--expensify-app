import {
  ADD_EXPENCE,
  REMOVE_EXPENCE,
  EDIT_EXPENCE
} from '../../AppStateManagement/constants'
import removeExpence from '../../AppStateManagement/actions/removeExpence'
import addExpense from '../../AppStateManagement/actions/addExpense'
import editExpense from '../../AppStateManagement/actions/editExpense'

test('Should set up remove expense action object', () => {
  const action = removeExpence({
    id: '123abc'
  })
  expect(action).toEqual({
    type: REMOVE_EXPENCE,
    id: '123abc'
  })
})


test('Should set up edit expense action object', () => {
  const action = editExpense('123abc', {
    description: 'wertyuio'
  })
  expect(action).toEqual({
    type: EDIT_EXPENCE,
    id: '123abc',
    updates: {
      description: 'wertyuio'
    }
  })
})

test('Should set up add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 105000,
    createdAt: 2000,
    note: 'My Rent for last month'
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: ADD_EXPENCE,
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  })
})

test('Should set up add expense action object with default values', () => {
  const expenseData = {
    description: '',
    amount: 0,
    createdAt: 0,
    note: ''
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: ADD_EXPENCE,
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  })
})