import React from 'react';
import 'normalize.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Layouts from '../Layouts';
import { Wrapper } from './Styled';

function App() {
  return (
    <Router>
      <Wrapper>
        <Layouts />
      </Wrapper>
    </Router>
  );
}

export default App;
