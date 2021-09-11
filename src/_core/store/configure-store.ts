import { CombinedState, combineReducers, createStore, Reducer, Store } from 'redux';

export interface ICustomStoreReducers {
  [key: string]: Reducer;
}

export interface ICustomStore extends Store {
  asyncReducers: ICustomStoreReducers;
  injectReducer: (key: string, reducer: Reducer) => void;
}

const createReducer = (staticReducers: ICustomStoreReducers, asyncReducers?: ICustomStoreReducers): Reducer<CombinedState<object>> => {
  return combineReducers({
    ...staticReducers,
    ...(asyncReducers || {}),
  });
};

export const configureStore = (initialState: object, staticReducers: ICustomStoreReducers): ICustomStore => {
  const store: ICustomStore = createStore(createReducer(staticReducers), initialState);
  store.asyncReducers = {};

  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers, staticReducers));
  };

  return store;
};
