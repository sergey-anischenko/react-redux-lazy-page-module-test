import { getLazyPageModule } from '../../_core/util/lazy-page.util';
import { ProductList } from './Product-list';
import { PRODUCT_LIST_STORE_STATE_NAME, productListReducer } from './store';

export const ProductListPage = getLazyPageModule({
  component: ProductList,
  reducer: {
    name: PRODUCT_LIST_STORE_STATE_NAME,
    reducer: productListReducer,
  },
});
