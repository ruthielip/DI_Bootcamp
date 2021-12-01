import {INCREMENT, DECREMENT} from './constants';

const initState = {
  counter: 0
}

export const reducers = (state = initState, action = {}) => {
  switch (action.type) {
    case INCREMENT:
      return {...state, counter: state.counter+1}
    case DECREMENT:
      return {...state, counter: state.counter-1}
    default:
      return {...state}
  }
}
