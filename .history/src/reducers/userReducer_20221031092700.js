import { USER } from '../actionType';

const initialState = {
  user: {}
};

// const user = (state, action) => {
//   return 
// }

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case USER: 
      return {
         ...state, 
         {user: action.payload} 
      };
    default: return state;
  }
};

export default userReducer;
