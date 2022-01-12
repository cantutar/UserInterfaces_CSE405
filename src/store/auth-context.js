import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import FirebaseApp from "../firebaseApp";

FirebaseApp();
export const firebaseErrors = {
  "auth/user-not-found": "User not found.",
  "auth/email-already-in-use": "Email is already in use.",
  "auth/weak-password": "Passsword needs to be atleast 6 characters.",
};
export const auth = getAuth();
const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export async function signup(email, password, displayName) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    return await sendEmailVerification(auth.currentUser);
  } catch (error) {
    alert(JSON.stringify(error.code));
  }
}
export async function signout() {
  return await signOut(auth);
}

export async function signin(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export default function AuthProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const [verifiedEmail, setVerifiedEmail] = useState();
  const [displayName, setDisplayName] = useState();

  const value = {
    currentUser,
    verifiedEmail,
    signup,
    signout,
    signin,
    displayName,
  };
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setVerifiedEmail(user?.emailVerified);
      setDisplayName(user?.displayName);
    });
    return unsub;
  }, []);
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
