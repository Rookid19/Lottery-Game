import { createContext, useContext } from "react";

export const RowsContext = createContext({});

export const RowsProvider = ({ children }) => {
  return <RowsContext.Provider>{children}</RowsContext.Provider>;
};

export default function useRow() {
  return useContext(RowsContext);
}
