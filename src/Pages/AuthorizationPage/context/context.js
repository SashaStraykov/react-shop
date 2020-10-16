import React, {
  createContext, useContext, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../../App/Context/Index';

export const Context = createContext();

export const Provider = ({ children }) => {
  // signIn
  const [loginSignIn, setLoginSignIn] = useState('');
  const [pasError, setPasError] = useState(false);
  const [password, setPassword] = useState('');
  const { contextData } = useContext(AppContext);
  const { user, setUser } = contextData;
  const [usersData, setUsersData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // signUp
  const [loginSignUp, setLoginSignUp] = useState('');
  const [emailSignUp, setEmailSignUp] = useState('');
  const [passwordSignUp, setPasswordSignUp] = useState('');
  // const [logErrorSignUp, setLogErrorSignUp] = useState(false);
  // const [pasErrorSignUp, setPasErrorSignUp] = useState(false);

  useEffect(() => {
    const dataRequest = async () => {
      await fetch('http://localhost:3000/users')
        .then((data) => data.json())
        .then((dataRes) => setUsersData(dataRes))
        .catch(() => setError(true));
    };
    dataRequest();
    setLoading(false);
  }, []);

  const checkAuthorization = (e) => {
    e.preventDefault();

    for (const key in usersData) {
      const dataUser = usersData[key];

      if (dataUser.login === loginSignIn) {
        if (dataUser.password !== password) {
          return setPasError(true);
        }
        if (dataUser.password === password && dataUser.login === loginSignIn) {
          setUser(dataUser);
          setPasError(false);
        }
      }
    }
  };

  // const postData = async (e) => {
  //   e.preventDefault();
  //   const personData = {
  //     id: loginSignUp,
  //     login: loginSignUp,
  //     password: passwordSignUp,
  //     email: emailSignUp,
  //   };
  //   await fetch('http://localhost:3000/users', {
  //     method: 'POST',
  //     body: personData,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => );

  //   JSON.stringify(personData);
  // };

  const authorizationContextData = {
    loginSignIn,
    setLoginSignIn,
    password,
    setPassword,
    checkAuthorization,
    pasError,
    user,
    loginSignUp,
    setLoginSignUp,
    passwordSignUp,
    setPasswordSignUp,
    emailSignUp,
    setEmailSignUp,
    error,
    loading,
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
