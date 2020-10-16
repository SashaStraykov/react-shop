import React from 'react';
import HeaderContent from './content/Header';
import { HeaderContextProvider } from './context';

const Header = () => (
  <HeaderContextProvider>
    <HeaderContent />
  </HeaderContextProvider>
);

export default Header;
