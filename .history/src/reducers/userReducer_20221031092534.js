import { USER } from '../actionType';

const initialState = {
  user: []
};

const user = (state, action) => {
  return { ...state, todos: state.todos.concat(action.todo) }
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case USER: return user(state, action);
    default: return state;
  }
};

export default userReducer;
