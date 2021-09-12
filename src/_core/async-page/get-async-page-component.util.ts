import { Component, ComponentType, FunctionComponent, lazy, LazyExoticComponent } from 'react';
import { IAsyncPageDecoratorMetaInterface } from './async-page.decorator';

export const getAsyncPageComponentUtil = (asyncImportFunction: () => Promise<object>): LazyExoticComponent<ComponentType<any>> => {
  return lazy(() =>
    asyncImportFunction().then(m => {
      let page: FunctionComponent | Component = () => null;
      Object.values(m).forEach(element => {
        if (typeof element === 'function' && element._SIsAsyncPageDecorator) {
          const elementUnit: IAsyncPageDecoratorMetaInterface = new element();
          page = elementUnit._SAsyncPageDecoratorComponent;
          // добавляем редюсеры
        }
      });
      return { default: page };
    }),
  );
};

getAsyncPageComponentUtil(() => import('../../pages/+About'));
