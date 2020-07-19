import firebase from "@firebase/app";
import "@firebase/auth";
import store from "./store";

const config = {
  apiKey: "AIzaSyB4WAJ01hCW5-cOEyIFJ-yF1LdJQKjj5BI",
  authDomain: "koop-1f7bf.firebaseapp.com",
  databaseURL: "https://koop-1f7bf.firebaseio.com",
  projectId: "koop-1f7bf",
  storageBucket: "koop-1f7bf.appspot.com",
  messagingSenderId: "1006169400342",
  appId: "1:1006169400342:web:9c298a12810c3d3c910137",
  measurementId: "G-WMRTZ94L2E",
};

export default {
  init() {
    firebase.initializeApp(config);
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  },
  login(email) {
    var actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be whitelisted in the Firebase Console.
      url: "https://" + window.location.host,
      // This must be true.
      handleCodeInApp: true,
    };
    firebase
      .auth()
      .sendSignInLinkToEmail(email, actionCodeSettings)
      .then(function () {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", email);
      })
      .catch(function (error) {
        console.log(error);
        // Some error occurred, you can inspect the code: error.code
      });
  },
  logout() {
    firebase.auth().signOut();
  },
  onAuth() {
    firebase.auth().onAuthStateChanged((user) => {
      user = user ? user : {};
      store.commit("onFirebaseChanged", true);
      store.commit("onAuthStateChanged", user);
      store.commit("onUserStatusChanged", user.uid ? true : false);
    });
  },
};
