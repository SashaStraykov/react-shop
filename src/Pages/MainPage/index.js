import React from "react";
import MainPageContent from "./content/MainPageContent";
import { MainPageContextProvider } from "./context";
import { Route } from "react-router-dom";
import { RoutesPath } from "../../RoutesPath";

const MainPage = () => {
  return (
    <>
      <Route exact path={RoutesPath.mainPage}>
        <MainPageContextProvider>
          <MainPageContent />
        </MainPageContextProvider>
      </Route>
    </>
  );
};

export default MainPage;
