import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { auth } from "../firebase";
const AuthContext = React.createContext();

export function AuthProvider(children) {


  const [currentUser, setCurrentUser] = useState();
  const value = {
    currentUser,
  };
  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
