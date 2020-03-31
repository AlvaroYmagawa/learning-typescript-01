// ACTIONS
export enum AuthTypes {
  SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE = '@auth/SIGN_IN_FAILURE'
}

// SAGA RESPONSE TYPE
export interface Auth {
  token: String,
}

// REDUCER
export interface AuthState {
  token: String,
  loading: Boolean,
  signed: Boolean,
}