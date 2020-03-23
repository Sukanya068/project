import React, { Component } from 'react';
import Header from '../src/components/Header';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import firebase from 'firebase';
class App extends Component {
  constructor(props){
  super(props);
  var config = {
    apiKey: "AIzaSyCvywjQav1J9sDyvMsPgf9SmU04v7x5Ehw",
    authDomain: "miniproject-b99b8.firebaseapp.com",
    databaseURL: "https://miniproject-b99b8.firebaseio.com",
    projectId: "miniproject-b99b8",
    storageBucket: "miniproject-b99b8.appspot.com",
    messagingSenderId: "929770118382",
    appId: "1:929770118382:web:61da4834d6f133dc37a7ff",
    measurementId: "G-JDCHN85PMF"
  };
  firebase.initializeApp(config);
}
render() {
  return (
    <div className="container">
      <Header title="Simple Firebase App" />
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageList db={firebase} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageBox db={firebase} />
        </div>
      </div>
    </div>
  );
 }
}
export default App;