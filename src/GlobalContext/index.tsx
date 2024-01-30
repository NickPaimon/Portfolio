import { createContext, useContext } from 'react';
export type GlobalContent = {
  loading: boolean;
  setLoading: (l: boolean) => void;
};
export const MyGlobalContext = createContext<GlobalContent>({
  loading: true, // set a default value
  setLoading: () => {
    throw new Error('setLoading function must be overridden by a Provider');
  },
});
export const useGlobalContext = () => useContext(MyGlobalContext);
