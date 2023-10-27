import { initializeApp as createApp } from "firebase/app";

import {
  getAuth,
  signOut as signOutFirebase,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const signIn = (email: string, password: string) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
}

 const signUp = (email: string, password: string) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
}

const signOut = () => {
  const auth = getAuth();
  return signOutFirebase(auth);
}

export { signIn,  signUp, signOut, createApp };