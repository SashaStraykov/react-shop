import React from 'react';
import AppContent from './content/AppContent';
import { AppContextProvider } from './context';

const App = () => {
    return (
        <AppContextProvider>
            <AppContent/>
        </AppContextProvider>
    )
}

export default App