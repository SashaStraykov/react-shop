import React, {
  createContext, useEffect, useContext, useState,
} from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../../App/Context/Index';

export const Context = createContext();

export const Provider = ({ children }) => {
  const { contextData } = useContext(AppContext);
  const { user, cart } = contextData;
  const [amountItemsinBucket, setAmountItemsinBucket] = useState(0);

  useEffect(() => {
    if (user) {
      const getLS = localStorage.getItem(user.id).split(',');
      if (getLS[0] === '') {
        setAmountItemsinBucket(0);
      } else {
        setAmountItemsinBucket(getLS.length);
      }
    }
  }, [cart, user]);

  const headerContextData = {
    amountItemsinBucket,
  };

  return (
    <Context.Provider value={{ headerContextData }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
