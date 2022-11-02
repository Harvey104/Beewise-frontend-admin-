import { USER } from '../actionType';

const initialState = {
  todos: []
};

const addTodo = (state, action) => {
  return { ...state, todos: state.todos.concat(action.todo) }
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO: return addTodo(state, action);
    default: return state;
  }
};

export default todoReducer;
