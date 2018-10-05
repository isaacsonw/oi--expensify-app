import { EDIT_EXPENCE } from '../constants'

const editExpense = (id, updates) => ({
  type: EDIT_EXPENCE,
  id,
  updates
});

export default editExpense
