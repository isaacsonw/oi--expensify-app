import { REMOVE_EXPENCE } from '../constants'


const removeExpence = ({ id } = {}) => ({
  type: REMOVE_EXPENCE,
  id
})

export default removeExpence
