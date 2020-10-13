import React from "react";
import MainPageContent from "./content/MainPageContent";
import { MainPageContextProvider } from "./context";
import { Route } from "react-router-dom";
import { HOME_PAGE } from "../../constants/routes";

const MainPage = () => {
  return (
    <>
      <Route exact path={HOME_PAGE}>
        <MainPageContextProvider>
          <MainPageContent />
        </MainPageContextProvider>
      </Route>
    </>
  );
};

export default MainPage;
