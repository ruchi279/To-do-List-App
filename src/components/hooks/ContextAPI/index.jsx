
// import { createContext, useContext } from "react";
import { createContext, use } from "react";

// 1 step
export const BioContext = createContext();

// 2nd step
export const BioProvider = ({ children }) => {
  const myName = "Ruchi";
  const myAge = 18;
  console.log(children);

  return (
    // provider-->>  is a bare house types  ....                 
    <BioContext.Provider value={{ myName, myAge }}>
      {children}
    </BioContext.Provider>
  );
};

// custom hooks
export const useBioContext = () => {
  const context = use(BioContext);
  if (context === undefined) {
    throw new Error("Component must be wrapped with BioProvider");
  }
  return context;
};
