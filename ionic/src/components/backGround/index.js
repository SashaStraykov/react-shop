import React from 'react';
import PropTypes from 'prop-types';
import './BackGround.css';

const BackGround = ({ children }) => (
  <div className="backGround">
    {children}
  </div>
);

export default BackGround;

BackGround.propTypes = {
  children: PropTypes.node.isRequired,

};
