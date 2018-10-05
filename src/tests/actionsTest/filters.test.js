import moment from 'moment'
import {
  SET_TEXT_FILTER,
  SORT_BY_DATE,
  SORT_BY_AMOUNT,
  SET_START_DATE,
  SET_END_DATE
} from '../../AppStateManagement/constants'
import {setTextFilter} from '../../AppStateManagement/actions/setTextFilter'
import setStartDate from '../../AppStateManagement/actions/setStartDate'
import setEndDate from '../../AppStateManagement/actions/setEndDate'
import sortByAmount from '../../AppStateManagement/actions/sortByAmount'
import sortByDate from '../../AppStateManagement/actions/sortByDate'


test('Should set up the set start date action object', () => {
  const action  = setStartDate(moment(0))
  expect(action).toEqual({
    type: SET_START_DATE,
    startDate: moment(0)
  })
})

test('Should set up the set end date action object', () => {
  const action  = setEndDate(moment(0))
  expect(action).toEqual({
    type: SET_END_DATE,
    endDate: moment(0)
  })
})

test('Generate set up for sort by amount action object', () => {
expect(sortByAmount()).toEqual({ type: SORT_BY_AMOUNT })
})

test('Generate set up for sort by date action object', () => {
expect(sortByDate()).toEqual({ type: SORT_BY_DATE })
})

test('Should set up set text filter action object with values', () => {
  const text = 'abc'
  const action = setTextFilter(text)
  expect(action).toEqual({
    type: SET_TEXT_FILTER,
    text
  })
})

test('Should set up set text filter action object default', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: SET_TEXT_FILTER,
    text: ''
  })
})