import React from "react";
import ItemPageContent from "./content/ItemPageContent";
import { ItemPageContextProvider } from "./Context/Index";
import { useParams } from "react-router-dom";

const ItemPage = () => {
  const { itemid } = useParams();
  return (
    <ItemPageContextProvider itemid={itemid}>
      <ItemPageContent />
    </ItemPageContextProvider>
  );
};

export default ItemPage;
