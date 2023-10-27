import admin from "firebase-admin";

import {
  initializeApp,
  applicationDefault,
} from "firebase-admin/app";

const db = admin.firestore();
const auth = admin.auth();

const createAdmin = (databaseUrl: string) => initializeApp({
  credential: applicationDefault(),
  databaseURL: databaseUrl,
});

const getSessionToken = async (token: string) => {
  const decodedToken = await auth.verifyIdToken(token);

  if (new Date().getTime() / 1000 - decodedToken.auth_time > 5 * 60) {
    throw new Error("Recent sign in required");
  }

  const twoWeeks = 60 * 60 * 24 * 14 * 1000;

  return auth.createSessionCookie(token, { expiresIn: twoWeeks });
}

export { db, auth, createAdmin, getSessionToken };