
//import action from '../action';
  import { combineReducers } from 'redux';

//   import LoginInputReducer from './LoginInputReducer';
  

const defaultState = {
    loading: false,
    username: '',
    password: ''
};

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'TYPE_USERNAME':
      return Object.assign({}, state, { 
        loading: false,
        username: action.username,
       
    });
      case 'TYPE_PASSWORD':
      return Object.assign({}, state, { 
        loading: false,
        password: action.password
    });
      case 'LOGIN_CLICKED':
      return Object.assign({}, state,{
        username:action.username,
        password:action.password,
        loading:true
      });
      default:
        return state;
    }
  }

    export default combineReducers({
    loginReducer: userReducer,
  })