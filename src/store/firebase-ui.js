import * as firebaseUI from 'firebaseui';
import firebase from 'firebase/app';

const ui = new firebaseUI.auth.AuthUI(firebase.auth());

const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      console.log({ authResult });
      return true;
    },
    uiShown: function() {
      document.getElementById('firebaseui-auth-container').style.display = 'none';
    },
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};
ui.start('#firebaseui-auth-container', uiConfig);

export default ui;
