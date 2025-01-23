import { User } from "./types";
import { Action } from 'redux';
export const SET_LOADING = 'SET_LOADING';
export const SET_DATA = 'SET_DATA';
export const SET_ERROR = 'SET_ERROR';

interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

interface SetDataAction {
  type: typeof SET_DATA;
  payload: User[];
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type UserActionTypes = SetLoadingAction | SetDataAction | SetErrorAction;

export const setLoading = (isLoading: boolean): SetLoadingAction => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const setData = (data: any): SetDataAction => ({
  type: SET_DATA,
  payload: data,
});

export const setError = (error: string): SetErrorAction => ({
  type: SET_ERROR,
  payload: error,
});