import React from 'react';
import 'normalize.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Layouts from '../Layouts';

const  App = () => {
  return (
    <Router>
      <Layouts />
    </Router>
  );
}

export default App;
