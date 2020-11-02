import React from 'react';
import AdminPageContent from './content/AdminPageContent';
import { AdminPageContextProvider } from './context';

const AdminPage = () => (
  <AdminPageContextProvider>
    <AdminPageContent />
  </AdminPageContextProvider>
);

export default AdminPage;
