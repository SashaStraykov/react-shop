import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { AppContext } from '../../../app/context';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [authentification, setAuthentification] = useState('SignIn');
  const [loading, setLoading] = useState(false);
  const [signInLogin, setSignInLogin] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signInCheckBox, setSignInCheckBox] = useState(true);

  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpLogin, setSignUpLogin] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpPasswordCheck, setSignUpPasswordCheck] = useState('');
  const [signUpCheckBox, setSignUpCheckBox] = useState(false);
  const [signUpCheckBoxCheck, setSignUpCheckBoxCheck] = useState(false);

  const { appContextData } = useContext(AppContext);
  const {
    setUser, showToast, setShowToast, errorMessage, setErrorMessage,
  } = appContextData;

  const authorization = async (e) => {
    e.preventDefault();
    setLoading(true);
    const personData = {
      login: signInLogin.trim(),
      password: signInPassword.trim(),
    };
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    await axios.post(process.env.REACT_APP_API_USERS_AUTHORIZATION, personData)
      .then(({ data }) => {
        localStorage.setItem('DataUser', data.token);
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response.data.message) {
          setErrorMessage(err.response.data.message);
          setShowToast(true);
          setLoading(false);
        }
      });
    return () => {
      setLoading(false);
    };
  };

  const registration = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (signUpPassword !== signUpPasswordCheck) {
      setLoading(false);
      setErrorMessage('The password doesn not match');
      return setShowToast(true);
    }
    const personData = {
      email: signUpEmail.trim(),
      login: signUpLogin.trim(),
      password: signUpPassword.trim(),
    };
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    await axios.post(process.env.REACT_APP_API_USERS_REGISTRATION, personData)
      .then(({ data }) => {
        setErrorMessage(data.message);
        setShowToast(true);
        setSignUpEmail('');
        setSignUpLogin('');
        setSignUpPassword('');
        setSignUpPasswordCheck('');
        setLoading(false);
      })
      .catch((err) => {
        if (err.response.data.message) {
          setErrorMessage(err.response.data.message);
          setShowToast(true);
          setLoading(false);
        }
      });
    return () => {
      setLoading(false);
    };
  };

  const authenticationPageContextData = {
    authentification,
    setAuthentification,
    signInLogin,
    setSignInLogin,
    signInPassword,
    setSignInPassword,
    signInCheckBox,
    setSignInCheckBox,
    signUpEmail,
    setSignUpEmail,
    signUpLogin,
    setSignUpLogin,
    signUpPassword,
    setSignUpPassword,
    signUpPasswordCheck,
    setSignUpPasswordCheck,
    signUpCheckBox,
    setSignUpCheckBox,
    signUpCheckBoxCheck,
    setSignUpCheckBoxCheck,
    authorization,
    showToast,
    setShowToast,
    errorMessage,
    loading,
    registration,
  };
  return (
    <Context.Provider value={{ authenticationPageContextData }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,

};
