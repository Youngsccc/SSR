import React, { createContext, ReactElement, FC, useContext } from 'react';
import createStore, { RootStore } from './rootStore';
import { useLocalObservable, enableStaticRendering } from 'mobx-react';

interface IStoreProps {
  initialValue: Record<string, any>;
  children: ReactElement;
}

enableStaticRendering(true);

const StoreContext = createContext({});

export const StoreProvider: FC<IStoreProps> = ({ initialValue, children }) => {
  const store: RootStore = useLocalObservable(createStore(initialValue));
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => {
  // eslint-disable-next-line prettier/prettier
  const store = useContext(StoreContext) as RootStore;

  if (!store) {
    return null;
  }

  return store;
};
