import React, { createContext, useContext, useState, useEffect } from "react";
import { AppContext } from "../../../App/Context/Index";

export const Context = createContext();

export const Provider = ({ children }) => {
  //signIn
  const [loginSignIn, setLoginSignIn] = useState("");
  const [pasError, setPasError] = useState(false);
  const [password, setPassword] = useState("");
  const { contextData } = useContext(AppContext);
  const { user, setUser } = contextData;
  const [usersData, setUsersData] = useState([]);

  //signUp
  const [loginSignUp, setLoginSignUp] = useState("");
  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  // const [logErrorSignUp, setLogErrorSignUp] = useState(false);
  // const [pasErrorSignUp, setPasErrorSignUp] = useState(false);

  useEffect(() => {
    const dataRequest = async () => {
      await fetch("http://localhost:3000/users")
        .then((data) => data.json())
        .then((dataRes) => setUsersData(dataRes));
    };
    dataRequest();
  }, []);

  const checkAuthorization = (e) => {
    e.preventDefault();

    for (let key in usersData) {
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

  const postData = async (e) => {
    e.preventDefault();
    const personData = {
      id: loginSignUp,
      login: loginSignUp,
      password: passwordSignUp,
      email: emailSignUp,
    };
    await fetch("http://localhost:3000/users", {
      method: "POST",
      body: personData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    console.log(personData);
    JSON.stringify(personData);
  };

  const authorizationContextData = {
    loginSignIn: loginSignIn,
    setLoginSignIn: setLoginSignIn,
    password: password,
    setPassword: setPassword,
    checkAuthorization: checkAuthorization,
    pasError: pasError,
    user: user,
    loginSignUp: loginSignUp,
    setLoginSignUp: setLoginSignUp,
    passwordSignUp: passwordSignUp,
    setPasswordSignUp: setPasswordSignUp,
    emailSignUp: emailSignUp,
    setEmailSignUp: setEmailSignUp,
    postData: postData,
  };

  return (
    <Context.Provider value={{ authorizationContextData }}>
      {children}
    </Context.Provider>
  );
};
