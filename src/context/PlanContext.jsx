import { createContext, useEffect, useState } from "react";

const PlanContext = createContext();

const PlanContextProvider = ({ children }) => {
  const [plan, setPlane] = useState();

  return (
    <PlanContext.Provider value={{ plan, setPlane }}>
      {children}
    </PlanContext.Provider>
  );
};

export { PlanContext, PlanContextProvider };
