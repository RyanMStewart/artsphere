import { auth } from './firebase';

// Sign up with email and password
export const signUpWithEmail = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

// Sign in with email and password
export const signInWithEmail = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

// Sign out
export const signOut = () => {
  return auth.signOut();
};

// Password reset
export const resetPassword = (email) => {
  return auth.sendPasswordResetEmail(email);
};

// Google sign-in
export const signInWithGoogle = () => {
  const provider = new auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};

// More authentication methods can be added as needed
