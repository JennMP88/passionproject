import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDUewjZ0CBYFeisbnJmas06Ly0eq2zpSz8",
  authDomain: "mypassionproject-db093.firebaseapp.com",
  databaseURL: "https://mypassionproject-db093.firebaseio.com",
  projectId: "mypassionproject-db093",
  storageBucket: "",
  messagingSenderId: "371922667171",
};

app.initializeApp(config);

export default app;