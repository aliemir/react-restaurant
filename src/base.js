import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "KEY_HERE",
  authDomain: "react-restaurant-7faa8.firebaseapp.com",
  databaseURL: "https://react-restaurant-7faa8.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
