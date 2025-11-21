import { createContext, useState } from "react";

export const searchProductContext = createContext();

function ContextApi({ children }) {
  const [searchKey, setSearchKey] = useState("");

  return (
    <searchProductContext.Provider value={{ searchKey, setSearchKey }}>
      {children}
    </searchProductContext.Provider>
  );
}

export default ContextApi;
