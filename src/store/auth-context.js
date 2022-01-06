import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useContext, useState } from "react";
import FirebaseApp from "../firebaseApp";

FirebaseApp();
export const auth = getAuth();

const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export async function signup(auth, email, password) {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert(error);
  }
}
export function AuthProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const value = {
    currentUser,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
