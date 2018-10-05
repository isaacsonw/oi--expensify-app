import { REMOVE_EXPENCE, ADD_EXPENCE, EDIT_EXPENCE } from '../constants'



const defaultState = []
export default function  (state = defaultState, action) {
  switch(action.type){
    case ADD_EXPENCE :
    return [
      ...state,
      action.expense
    ]
    case REMOVE_EXPENCE :
    return state.filter(({ id }) => id !== action.id )

    case EDIT_EXPENCE :
    return state.map((expense) => {
      if(expense.id === action.id){
        return {
          ...expense,
          ...action.updates
        }
      }else {
        return expense;
      }
    })

      break;

    default:
    return state
  }

}
