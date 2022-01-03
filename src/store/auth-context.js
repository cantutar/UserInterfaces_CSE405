import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import FirebaseApp from "../firebaseApp";

FirebaseApp();
const auth = getAuth();

const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const value = {
    currentUser,
    signUp,
  };
  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setCurrentUser(userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
