import React, {
  createContext, useContext, useState,
} from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../../App/Context/Index';

export const Context = createContext();

export const Provider = ({ children }) => {
  // signIn
  const [loginSignIn, setLoginSignIn] = useState('');
  const [password, setPassword] = useState('');
  const { contextData } = useContext(AppContext);
  const { user, setUser, setOpenToast, setErrorMessage } = contextData;
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // signUp
  const [loginSignUp, setLoginSignUp] = useState('');
  const [emailSignUp, setEmailSignUp] = useState('');
  const [passwordSignUp, setPasswordSignUp] = useState('');

  const checkAuthorization = async (e) => {
    e.preventDefault();
    const personData = {
      login: loginSignIn.trim(),
      password: password.trim(),
    };
    setLoading(true);
    await fetch(`${process.env.REACT_APP_API_USERS}/authorization`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(personData),
    })
    .then((response) => response.json())
      .then((data) => { 
        console.log(data)
        if (data.message) {
          setLoading(false);
          setErrorMessage(data.message)
          setOpenToast(true)
        } else {
          setLoading(false);
          setUser(data);
          localStorage.setItem('DataUser', data.token);
        }
      })
      .catch((e) =>setError(true));
  };

  const postData = async (e) => {
    e.preventDefault();
    setLoading(true)
    const personData = {
      login: loginSignUp.trim(),
      password: passwordSignUp.trim(),
      email: emailSignUp.trim(),
    };
    await fetch(`${process.env.REACT_APP_API_USERS}/registration`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(personData),
    })
      .then((response) => response.json())
      .then(data => {
        if(data.message) {
          setErrorMessage(data.message)
        }
        if(data.message==='User has declarated') {
          setLoginSignUp('');
          setEmailSignUp('');
          setPasswordSignUp('');
        }
        });
        setLoading(false);
        setOpenToast(true)
  };

  const authorizationContextData = {
    loginSignIn,
    setLoginSignIn,
    password,
    setPassword,
    checkAuthorization,
    user,
    loginSignUp,
    setLoginSignUp,
    passwordSignUp,
    setPasswordSignUp,
    emailSignUp,
    setEmailSignUp,
    error,
    loading,
    postData,
  };

  return (
    <Context.Provider value={{ authorizationContextData }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,

};
