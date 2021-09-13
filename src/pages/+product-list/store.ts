import { Action } from 'redux';

export const PRODUCT_LIST_STORE_STATE_NAME = 'productList';

enum eProductListActions {
  LOAD = '[My Product List] LOAD',
  LOAD_END = '[My Product List] LOAD END',
}

interface IProductListState {
  isLoading: boolean;
  list: string[];
}

const initialProductListState: IProductListState = {
  isLoading: false,
  list: [],
};

export const productListReducer = (
  state: IProductListState = initialProductListState,
  action: Action<eProductListActions>,
): IProductListState => {
  switch (action.type) {
    case eProductListActions.LOAD:
    case eProductListActions.LOAD_END:
    default:
      return state;
  }
};
