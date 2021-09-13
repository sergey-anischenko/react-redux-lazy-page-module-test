import { ICustomStoreReducers } from '../_core/util/configure-store.util';
import { USER_STATE_NAME, userReducer } from './user';
import { CRITICAL_DATA_STATE_NAME, criticalDataReducer } from './critical-data';

export const globalReducers: ICustomStoreReducers = {
  [USER_STATE_NAME]: userReducer,
  [CRITICAL_DATA_STATE_NAME]: criticalDataReducer,
};
