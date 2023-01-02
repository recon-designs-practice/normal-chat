import firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBb6Qjlxloq8s4gSrcnWYMee6DWPEwmpjg",
  authDomain: "superchat-8-d4b47.firebaseapp.com",
  projectId: "superchat-8-d4b47",
  storageBucket: "superchat-8-d4b47.appspot.com",
  messagingSenderId: "818714012382",
  appId: "1:818714012382:web:da512ce7056a31ab65704f"
}

const app = firebase.initializeApp(firebaseConfig)

export const auth = app.auth()
export const firestore = app.firestore()
// Do I need this default export?
export default app