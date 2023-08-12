import React, { useState } from "react";
import { IMinicart, IUseMinicart } from "../typings/useMinicart";

const initialValue = {
  productId: [],
};

const UseMinicartContext = React.createContext<IUseMinicart>(
  {} as IUseMinicart
);

const UseMinicartProvider = ({ children }) => {
  const [minicart, setMinicart] = useState<IMinicart>(initialValue);

  return (
    <UseMinicartContext.Provider
      value={{
        setMinicart,
        minicart,
      }}
    >
      {children}
    </UseMinicartContext.Provider>
  );
};

const useMinicart = () => {
  const context = React.useContext(UseMinicartContext);
  return context;
};
export { UseMinicartProvider, useMinicart };
