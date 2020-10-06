import React from "react";
import PersonPageContent from "./content/PersonPageContent";

import { PersonPageContextProvider } from "./context";

const PersonPage = () => {
  return (
    <PersonPageContextProvider>
      <PersonPageContent />
    </PersonPageContextProvider>
  );
};

export default PersonPage;
