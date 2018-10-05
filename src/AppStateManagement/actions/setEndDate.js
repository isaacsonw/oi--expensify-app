import { SET_END_DATE } from '../constants'


const setEndDate = ( endDate ) => ({
  type: SET_END_DATE,
  endDate
})

export default setEndDate