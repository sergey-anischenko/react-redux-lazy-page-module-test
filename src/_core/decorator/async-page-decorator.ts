import { Reducer } from 'redux';
import { Component, FunctionComponent } from 'react';

export interface IAsyncPageDecoratorOptions {
  component: FunctionComponent | Component;
  reducers?: Reducer[];
}

interface ISomeInterface {
  _SAsyncPageDecoratorComponent: FunctionComponent | Component;
  _SAsyncPageDecoratorReducers?: Reducer[];
}

type ISomeType = new (...args: any[]) => ISomeInterface;

export const AsyncPageModule = (options: IAsyncPageDecoratorOptions) => <T extends { new (...args: any[]): {} }>(target: T): ISomeType => {
  return class extends target {
    public _SAsyncPageDecoratorComponent: FunctionComponent | Component = options.component;
    public _SAsyncPageDecoratorReducers: Reducer[] | undefined = options.reducers;
  };
};
