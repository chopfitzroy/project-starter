import type { ReactNode } from "react";

import { useContext as use, createContext as create } from "react";

type ProviderProps<T> = T & {
  children: ReactNode;
};

interface ValuesProps<T> {
  children: (props: T) => JSX.Element;
}

export const createContext = <
  P extends Record<string, unknown>,
  T extends unknown,
>(
  useContextState: (props: P) => T,
) => {
  const Instance = create<T | undefined>(undefined);

  const useContext = () => {
    const context = use(Instance);
    if (context === undefined) {
      throw new Error("useContext must be used within a Context.Provider");
    }
    return context;
  };

  const Provider = (props: ProviderProps<P>) => {
    const state = useContextState(props);
    return (
      <Instance.Provider value={state}>{props.children}</Instance.Provider>
    );
  };

  const Values = ({ children }: ValuesProps<T>) => {
    const values = useContext();
    return children(values);
  };

  const Context = {
    Provider,
    Values,
  };

  return { Context, useContext };
};