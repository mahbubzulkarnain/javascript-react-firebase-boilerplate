import * as firebase from "firebase/app";

import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';

import options from './config'

// fix "Firebase: Firebase App named '[DEFAULT]' already exists (app/duplicate-app)."
if (!firebase.apps.length) {
  firebase.initializeApp(options);
}

export const db = firebase.firestore();
export const auth = firebase.auth();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const githubAuthProvider = new firebase.auth.GithubAuthProvider();
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export const storage = firebase.storage();

export default firebase;
