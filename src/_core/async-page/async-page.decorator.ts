import { Reducer } from 'redux';
import { Component, FunctionComponent } from 'react';

export interface IAsyncPageDecoratorOptions {
  component: FunctionComponent | Component;
  reducers?: Reducer[];
}

export interface IAsyncPageDecoratorMetaInterface {
  _SAsyncPageDecoratorComponent: FunctionComponent | Component;
  _SAsyncPageDecoratorReducers: Reducer[];
}

export const AsyncPageModule = (options: IAsyncPageDecoratorOptions) => <T extends { new (...args: any[]): {} }>(target: T): T => {
  return class extends target implements IAsyncPageDecoratorMetaInterface {
    public _SAsyncPageDecoratorComponent: FunctionComponent | Component = options.component;
    public _SAsyncPageDecoratorReducers: Reducer[] = options.reducers || [];

    static _SIsAsyncPageDecorator = true;
  };
};
