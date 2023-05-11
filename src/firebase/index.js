


import AsyncStorage from "@react-native-async-storage/async-storage";
import {initializeApp} from 'firebase/app';

import { initializeAuth,  getReactNativePersistence } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyBfV_ChDf6P9NPmZNxB23Akov5Zx1hhZcQ",
  authDomain: "my-local-firebase.firebaseapp.com",
  projectId: "my-local-firebase",
  storageBucket: "my-local-firebase.appspot.com",
  messagingSenderId: "477028794306",
  appId: "1:477028794306:web:49c4cb0ca0dbc6b202205b"
};


  const app = initializeApp(firebaseConfig);

  const auth = initializeAuth(app,{
    persistence:getReactNativePersistence(AsyncStorage)
  });

  export {auth};