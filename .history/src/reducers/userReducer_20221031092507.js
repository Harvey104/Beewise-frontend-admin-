import { USER } from '../actionType';

const initialState = {
  user: []
};

const user = (state, action) => {
  return { ...state, todos: state.todos.concat(action.todo) }
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO: return user(state, action);
    default: return state;
  }
};

export default todoReducer;
