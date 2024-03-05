//import { initializeApp } from "firebase/app";

//changed const require to import pkg from file, const name = pkg
import expressPkg from 'express';
const express = expressPkg;
import pkg  from 'body-parser';
const bodyParser = pkg
import corsPkg from 'cors';
const cors = corsPkg;
import pack from 'firebase-admin';
const admin = pack
import {default as signIn} from './routes/user/signIn.js';
import {default as signUp}  from './routes/user/signUp.js';
//const signUp = signUpPkg;

//import router as itemsRouter  from './routes/item/ItemCatalogue';
//import router as searchRouter from './routes/search/invertedSearch';
//import router as  biddingItem from './routes/bidding/biddingItem';

const app = express();
//import serviceAccount from './key.json' with {type: 'json'};

import serviceAccount from './key.json' with {type: 'json'};
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

const firebaseConfig = {

  apiKey: "AIzaSyASzODFRoEywWL42LyIFwxJbIxzQT2elRk",

  authDomain: "eecs4413-6983c.firebaseapp.com",

  databaseURL: "https://eecs4413-6983c-default-rtdb.firebaseio.com",

  projectId: "eecs4413-6983c",

  storageBucket: "eecs4413-6983c.appspot.com",

  messagingSenderId: "236603067661",

  appId: "1:236603067661:web:5e24337180d0eea066f444",

  measurementId: "G-1CL3HY7CNK"

};
////errrors start here 
//const firebaseapp = initializeApp(firebaseConfig);

// Middleware to parse JSON request body
app.use(bodyParser.json());

app.locals.admin = admin;

// Routes
app.use(cors());
app.use('/signup', signUp);
app.use('/signin', signIn);
//app.use('/api', itemsRouter);
//app.use('/api', searchRouter);
//app.use('/api', biddingItem);


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on http://localhost:3000 in mode", this.address().port, app.settings.env);
});

export default app;
