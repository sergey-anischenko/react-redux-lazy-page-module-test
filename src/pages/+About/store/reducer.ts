import { Action } from 'redux';
import { IAboutState, initialAboutState } from './state';
import { eAboutActions } from './action';

export const aboutReducer = (state: IAboutState = initialAboutState, action: Action<eAboutActions>): IAboutState => {
  switch (action.type) {
    case eAboutActions.LOAD:
    case eAboutActions.LOAD_END:
    default:
      return state;
  }
};
