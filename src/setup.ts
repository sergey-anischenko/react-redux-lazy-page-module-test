import { configureStore } from './_core/util/configure-store.util';
import { configureLazyPageComponentGetter } from './_core/util/lazy-page.util';
import { globalReducers } from './store';

export const store = configureStore(globalReducers);

export const getLazyPageComponent = configureLazyPageComponentGetter(store);
