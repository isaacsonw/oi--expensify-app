import moment from 'moment'
import {
  SET_TEXT_FILTER,
  SET_START_DATE,
  SET_END_DATE,
  SORT_BY_AMOUNT,
  SORT_BY_DATE
} from '../constants'


const defaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}
export default  (state = defaultState, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return {
        ...state,
        ...action.text
      }
    case SORT_BY_DATE:
      return {
        ...state,
        sortBy: 'date'
      }
    case SORT_BY_AMOUNT:
      return {
        ...state,
        sortBy: 'amount'
      }
    case SET_START_DATE:
      return {
        ...state,
        startDate: action.startDate
      }
    case SET_END_DATE:
      return {
        ...state,
        endDate: action.endDate
      }

    default:
      return state
  }

}