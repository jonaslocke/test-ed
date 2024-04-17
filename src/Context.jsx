import { createContext, useState } from "react";

export const GlobalContext = createContext({ id: null, setId: null });

export const GlobalContextProvider = ({ children }) => {
  const [id, setId] = useState(null);
  return (
    <GlobalContext.Provider value={{ id, setId }}>
      {children}
    </GlobalContext.Provider>
  );
};
