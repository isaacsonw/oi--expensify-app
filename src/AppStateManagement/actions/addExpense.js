import { ADD_EXPENCE } from '../constants'
import uuidv4 from 'uuid/v4'



 const  addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0

} = {}) => ({
  type: ADD_EXPENCE,
  expense: {
     id : uuidv4(),
     description,
     note,
     amount,
     createdAt

  }
})

export default addExpense
