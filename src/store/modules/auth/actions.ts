import { action } from 'typesafe-actions';
import {AuthTypes, Auth} from './types';

export const signInRequest = () => action(AuthTypes.SIGN_IN_REQUEST);

export const signInSuccess = (data: Auth) => action(AuthTypes.SIGN_IN_SUCCESS, data);

export const signInFailure = () => action(AuthTypes.SIGN_IN_FAILURE);