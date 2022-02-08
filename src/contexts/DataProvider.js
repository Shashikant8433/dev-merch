import { createContext, useContext } from "react";

const DataContext = createContext();

export default function DataProvider({ children }) {
  return <DataContext.Provider>{children}</DataContext.Provider>;
}

export function useContext() {
  return useContext(DataContext);
}
