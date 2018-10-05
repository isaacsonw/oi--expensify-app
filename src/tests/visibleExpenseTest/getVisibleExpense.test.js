
import moment from 'moment'
import getVisibleExpense from '../../components/getVisibleExpense'

const expenses = [{
  id: '1',
  description: 'Rent',
  amount: 100200,
  note: '',
  createdAt: 0
}, {
  id: '2',
  description: 'Milk',
  amount: 500,
  note: '',
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Design',
  amount: 2400,
  note: '',
  createdAt: moment(0).add(4, 'days').valueOf()
}]

test('Should filter by text value', () => {
  const filters = {
    text: 'i',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = getVisibleExpense(expenses, filters)
  expect(result).toEqual([expenses[2], expenses[1]])
})

test('should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  }
  const result = getVisibleExpense(expenses, filters)
  expect(result).toEqual([ expenses[2], expenses[0] ])
})

test('should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  }
  const result = getVisibleExpense(expenses, filters)
  expect(result).toEqual([ expenses[0],  expenses[1]])
})

test('should sort by  date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = getVisibleExpense(expenses, filters)
  expect(result).toEqual([ expenses[2],  expenses[0], expenses[1]])
})

test('should sort by  amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const result = getVisibleExpense(expenses, filters)
  expect(result).toEqual([ expenses[0],  expenses[2], expenses[1]])
})