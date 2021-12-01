import {AGE_UP, AGE_DOWN} from './constants';

export const ageUp = () => {
  return {
    type: AGE_UP
  }
}

export const ageDown = () => {
  return {
    type: AGE_DOWN
  }
}
