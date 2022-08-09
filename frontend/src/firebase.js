import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBtvvExxF7SAEvavO19RD7MP9OJ4UgTLro",
  authDomain: "robolution-testing.firebaseapp.com",
  projectId: "robolution-testing",
  storageBucket: "robolution-testing.appspot.com",
  messagingSenderId: "276352697239",
  appId: "1:276352697239:web:8c757ac39ef1e03aa9bad2",
  measurementId: "G-8ZGBWJ9RNH",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
