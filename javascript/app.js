swal("CHOO CHOO MFER");

var config = {
  apiKey: "AIzaSyCaUiSfy988gw2xfVzw3Yn0myzJ-5UbCcI",
  authDomain: "train-scheduler-454f8.firebaseapp.com",
  databaseURL: "https://train-scheduler-454f8.firebaseio.com",
  storageBucket: "train-scheduler-454f8.appspot.com",
  messagingSenderId: "682983660240"
};

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
var frequency = "";
var nextArrival = "";
var minutesAway = "";

  $("userSubmit").on("click", function(){
      trainName = $("#nameInput").val().trim();
      destination = $("#destinationInput").val().trim();
      frequency = $("#freqInput").val().trim();
      nextArrival = $("#nextInput").val().trim();
      minutesAway = $("#minutesInput").val().trim();

      database.ref().push({
          trainName: trainName,
          destination: destination,
          frequency: frequency,
          nextArrival: nextArrival,
          minutesAway: minutesAway,

          event.preventDefault();
          
  })
})





















