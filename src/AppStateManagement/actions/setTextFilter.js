import { SET_TEXT_FILTER } from '../constants'


 export const setTextFilter = (text = '') => ({
  type: SET_TEXT_FILTER,
  text
})

