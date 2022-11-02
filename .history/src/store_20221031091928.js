import { createStore } from 'redux';
import todoReducer from './reducers/userReducer';

export default createStore(todoReducer);
