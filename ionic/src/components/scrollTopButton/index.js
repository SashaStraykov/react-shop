import { element } from 'prop-types';
import React, { useRef } from 'react';

const ScrollTopButton = ({ elemet }) => {
  const scrollTop = () => {
    element.current.focus();
  };
  return (
    <div />
  );
};

export default ScrollTopButton;
