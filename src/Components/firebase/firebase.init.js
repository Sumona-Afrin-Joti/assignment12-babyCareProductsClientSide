import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const authInitialization = () => {
  return initializeApp(firebaseConfig);
}

export default authInitialization;
