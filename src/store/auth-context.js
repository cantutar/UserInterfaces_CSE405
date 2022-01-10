import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import FirebaseApp from "../firebaseApp";

FirebaseApp();
export const auth = getAuth();

const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export function signup(auth, email, password) {
  try {
    return createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert(JSON.stringify(error.code));
  }
}
export function signout(auth) {
  signOut(auth);
}

export default function AuthProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const value = {
    currentUser,
    signup,
    signout,
  };
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsub;
  }, []);

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
