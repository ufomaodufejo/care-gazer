import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

/**
 * Firebase Admin SDK to access Firestore
 */

admin.initializeApp();
const db = admin.firestore();

/**
 * create user in Firestore on user account creation through Firebase Auth
 * */

export const createUser = functions.auth.user().onCreate(async (user) => {
  const newUser = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    providerData: user.providerData,
  };

  db.collection("users").doc(user.uid).set(newUser);
});

/**
 * delete user in Firestore on user account deletion through Firebase Auth
 * */

export const deleteUserDocument = functions.auth
  .user()
  .onDelete(async (user) => {
    db.collection("users").doc(user.uid).delete();
  });
