swal("CHOO CHOO MFER");

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCaUiSfy988gw2xfVzw3Yn0myzJ-5UbCcI",
    authDomain: "train-scheduler-454f8.firebaseapp.com",
    databaseURL: "https://train-scheduler-454f8.firebaseio.com",
    storageBucket: "train-scheduler-454f8.appspot.com",
    messagingSenderId: "682983660240"
  };
  
  // firebase.initializeApp(config);


//  //defining database 
//   var database = firebase()

// //push to fire base - new train is defined by input variables 
//   database.ref().push(newTrain); 

// // clear user inputs 
// $(#trainName).val(""); 

// return false = event.preventdefault 

// //calls the object user inputted, to later be appended 
// var trName = childSnapshot.val().name;

firebase.initializeApp(config); 

var database = firebase.database();
var trainName = "";
var destination = "";
var firstTrain = "";
var frequency = "";

  $("userSubmit").on("click", function(){
      trainName = $("#nameInput").val().trim();
      destination = $("#destinationInput").val().trim();
      firstTrain = $("#firstInput").val().trim();
      frequency = $("#freqInput").val().trim();
      
      database.ref().push({
          trainName: trainName,
          destination: destination,
          firstTrain: firstTrain
          frequency: frequency,

          // event.preventDefault();
          return false; 
  })
})





















