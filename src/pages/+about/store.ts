import { Action } from 'redux';

export const ABOUT_STORE_STATE_NAME = 'about';

export enum eAboutActions {
  LOAD = '[My State] LOAD',
  LOAD_END = '[My State] LOAD END',
}

export interface IAboutState {
  isLoading: boolean;
}

export const initialAboutState: IAboutState = {
  isLoading: false,
};

export const aboutReducer = (state: IAboutState = initialAboutState, action: Action<eAboutActions>): IAboutState => {
  switch (action.type) {
    case eAboutActions.LOAD:
    case eAboutActions.LOAD_END:
    default:
      return state;
  }
};
