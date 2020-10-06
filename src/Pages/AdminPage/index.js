import React from "react";
import AdminPageContent from "./content/AdminPageContent";
import { AdminPageContextProvider } from "./context";

const AdminPage = () => {
  return (
    <AdminPageContextProvider>
      <AdminPageContent />
    </AdminPageContextProvider>
  );
};

export default AdminPage;
