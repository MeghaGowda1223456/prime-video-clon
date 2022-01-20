import firebase from "firebase";

//Authentication
import "firebase/auth";
//realtime database ;
import "firebase/database";
//firebase storage
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBC29kgSgauO8khAfF3V-pq3DcMZrXybzA",
  authDomain: "prime-db8df.firebaseapp.com",
  projectId: "prime-db8df",
  storageBucket: "prime-db8df.appspot.com",
  messagingSenderId: "912798993606",
  appId: "1:912798993606:web:7a329e969f62df787d9bc7"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
