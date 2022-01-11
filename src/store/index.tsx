import { createContext, FC, PropsWithChildren, useContext } from 'react';
import reactContainer from './container/inversify';

const StoresContext = createContext({
	store: reactContainer,
});

export const useStore = () => useContext(StoresContext).store;

export const StoreProvider: FC<PropsWithChildren<{}>> = ({ children }) => (
	<StoresContext.Provider value={{ store: reactContainer }}>{children}</StoresContext.Provider>
);
