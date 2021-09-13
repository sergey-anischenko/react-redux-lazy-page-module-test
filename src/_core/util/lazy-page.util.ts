import { Reducer } from 'redux';
import { ComponentType, lazy, LazyExoticComponent } from 'react';
import { ICustomStore } from './configure-store.util';

export interface ILazyPageOptions {
  component: ComponentType;
  reducer?: {
    name: string;
    reducer: Reducer;
  };
}

const isLazyPageModuleKey = Symbol('is lazy page module key');

export interface ILazyPageMeta extends ILazyPageOptions {
  [isLazyPageModuleKey]: boolean;
}

export const getLazyPageModule = (options: ILazyPageOptions): ILazyPageMeta => ({
  ...options,
  [isLazyPageModuleKey]: true,
});

export const configureLazyPageComponentGetter = (store: ICustomStore) => (
  lazyImportFunction: () => Promise<object>,
): LazyExoticComponent<ComponentType<any>> => {
  return lazy(() =>
    lazyImportFunction().then(m => {
      let page: ComponentType = () => null;
      Object.values(m).forEach(element => {
        if (typeof element === 'object' && element[isLazyPageModuleKey] === true) {
          const lazyPage: ILazyPageMeta = element;
          page = lazyPage.component;
          if (lazyPage.reducer) {
            store.injectReducer(lazyPage.reducer.name, lazyPage.reducer.reducer);
          }
        }
      });
      return { default: page };
    }),
  );
};
