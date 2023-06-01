//logementsContext.js brouillon

import React, { createContext, useEffect, useState } from 'react';
import LogementsArray from "./assets/Datas/logements.json";

export const LogementsContext = createContext();

export const LogementsProvider = ({ children }) => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    // Charger les données du fichier JSON
    setLogements(LogementsArray);
  }, []);

  return (
    <LogementsContext.Provider value={logements}>
      {children}
    </LogementsContext.Provider>
  );
};
