import React from 'react';
import PropTypes from 'prop-types';
import './backGround.css';

const BackGround = ({ children }) => (
  <div className="backGround">
    {children}
  </div>
);

export default BackGround;

BackGround.propTypes = {
  children: PropTypes.node.isRequired,

};
