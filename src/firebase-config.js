import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBqkF2XTetjMWQopwmUbDYmSbVKJDgzLJ8",
  authDomain: "haloween-delaf-2024.firebaseapp.com",
  projectId: "haloween-delaf-2024",
  storageBucket: "haloween-delaf-2024.appspot.com",
  messagingSenderId: "876204963599",
  appId: "1:876204963599:web:69db5c93b5df55eedb707a",
  measurementId: "G-9HTN0B5HYH",
};

// Initialiser Firebase et Analytics
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
