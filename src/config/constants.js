import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAYuzN-KqFyJXxdZ9u6zFYkKbInjpxdEts",
    authDomain: "horizon-education.firebaseapp.com",
    databaseURL: "https://horizon-education.firebaseio.com",
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;