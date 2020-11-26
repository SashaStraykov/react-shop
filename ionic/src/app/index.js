import React from 'react';
import AppContent from './content/AppContent';
import { AppContextProvider } from './context';

const App = () => (
  <AppContextProvider>
    <AppContent />
  </AppContextProvider>
);

export default App;
