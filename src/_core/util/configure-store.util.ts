import { CombinedState, combineReducers, createStore, Reducer, Store } from 'redux';

export interface ICustomStoreReducers {
  [key: string]: Reducer;
}

export interface ICustomStore extends Store {
  injectReducer: (key: string, reducer: Reducer) => void;
}

const createReducer = (staticReducers: ICustomStoreReducers, asyncReducers?: ICustomStoreReducers): Reducer<CombinedState<object>> => {
  return combineReducers({
    ...staticReducers,
    ...(asyncReducers || {}),
  });
};

export const configureStore = (staticReducers: ICustomStoreReducers = {}, initialState: object = {}): ICustomStore => {
  const store: ICustomStore = createStore(createReducer(staticReducers), initialState);
  const asyncReducers: ICustomStoreReducers = {};

  store.injectReducer = (key, asyncReducer) => {
    asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(asyncReducers, staticReducers));
  };

  return store;
};
