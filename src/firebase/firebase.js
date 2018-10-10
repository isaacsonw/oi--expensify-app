import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBLx6zloUBxKOnp1A1BSRnPxGue_nLs-WU",
    authDomain: "oi-expensify.firebaseapp.com",
    databaseURL: "https://oi-expensify.firebaseio.com",
    projectId: "oi-expensify",
    storageBucket: "oi-expensify.appspot.com",
    messagingSenderId: "359824412460"
  };
  firebase.initializeApp(config);
  const database =  firebase.database()

 database.ref().set({
      name: 'Isaac',
      age: 55,
      isSingle: false,
      location: {
          city: 'Aba',
          country: 'Nigeria'
      }
  }).then(function() {
    console.log("Data saved.")
  })
  .catch(function(error) {
    console.log("Something went wrong : " + error.message)
  });


  database.ref('attributes').set({
      height: 175,
      weight: 77
  })

  database.ref('isSingle').remove()
  .then(function() {
    console.log("Remove succeeded.")
  })
  .catch(function(error) {
    console.log("Remove failed: " + error.message)
  });