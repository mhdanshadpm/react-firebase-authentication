import app from 'firebase/app';
import 'firebase/auth';
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    };
// const config = {
//     apiKey: "AIzaSyCmpiqvzOHjdXq5kdh3R8S7L-TnNSTq28c",
//     authDomain: "anshad-react-firebase-project.firebaseapp.com",
//     databaseURL: "https://anshad-react-firebase-project.firebaseio.com",
//     projectId: "anshad-react-firebase-project",
//     storageBucket: "anshad-react-firebase-project.appspot.com",
//     messagingSenderId: "479213680704",
//     appId: "1:479213680704:web:c1996331d535cc28d5c7a5",
//     measurementId: "G-PS9GLLMZSQ"
//   };

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

}


export default Firebase;
