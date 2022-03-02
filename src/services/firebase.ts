import { initializeApp }  from "firebase/app";

import { getAuth } from "firebase/auth";

interface firebaseconfig {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
  }

const firebaseConfig: firebaseconfig = {
    apiKey: "AIzaSyAJynuiBsG0Q7Z6BcbUFV-VFFcd3w1mjd4",
    authDomain: "spotify-d6092.firebaseapp.com",
    databaseURL: "https://spotify-d6092-default-rtdb.firebaseio.com",
    projectId: "spotify-d6092",
    storageBucket: "spotify-d6092.appspot.com",
    messagingSenderId: "306202888294",
    appId: "1:306202888294:web:6fbac7c504c39fa69c85a7",
    measurementId: "G-MW1GN62EGX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);