import { AuthState, AuthTypes } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: AuthState = {
  token: "",
  loading: false,
  signed: false,
}

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case AuthTypes.SIGN_IN_SUCCESS:
      return {
      ...state, loading: false, token: action.payload.data, signed: true,
      };
    case AuthTypes.SIGN_IN_FAILURE:
      return {
      ...state, token: "" ,loading: false, signed: false,
      };
    default:
      return state;
  }
};

export default reducer;