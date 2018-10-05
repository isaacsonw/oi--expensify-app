import { combineReducers } from "redux";
import expences from './expenses'
import filters from './filters'


export default combineReducers({
  expences,
  filters
})
