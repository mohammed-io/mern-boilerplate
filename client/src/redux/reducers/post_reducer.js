import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions/types';

const INITIAL_STATE = { auth: false, message: '', error: '' };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, auth: true };
      break;
    case UNAUTH_USER:
      return { ...state, auth: false };
      break;
    case AUTH_ERROR:
      return { ...state, error: action.payload };
      break;
    default:
      return state;
  }
}