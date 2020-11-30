import React, {
  createContext, useState, useContext,
} from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../../app/context';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [idDeleteAnnouncement, setIdDeleteAnnouncement] = useState('');
  const [personPageSegment, setPersonPageSegment] = useState('personProducts');

  const { appContextData } = useContext(AppContext);
  const { errorMessage, showToast, setShowToast } = appContextData;

  const personPageContextData = {
    alert,
    setIdDeleteAnnouncement,
    idDeleteAnnouncement,
    showToast,
    errorMessage,
    setShowToast,
    personPageSegment,
    setPersonPageSegment,
  };
  return (
    <Context.Provider value={{ personPageContextData }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,

};
