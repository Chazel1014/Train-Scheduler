// swal("CHOO CHOO MFER");

  // Initialize Firebase
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBkud8kbytpaIpdmyKSKcJlxc5pfrzZVzY",
    authDomain: "train2-b9855.firebaseapp.com",
    databaseURL: "https://train2-b9855.firebaseio.com",
    storageBucket: "train2-b9855.appspot.com",
    messagingSenderId: "2951539288"
  };
 
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


  $("#userSubmit").on("click", function(){
      trainName = $("#nameInput").val().trim();
      console.log(trainName);
      destination = $("#destinationInput").val().trim();
      firstTrain = $("#firstInput").val().trim();
      frequency = $("#freqInput").val().trim();
      
      var newTrain = {
          trainName: trainName,
          destination: destination,
          firstTrain: firstTrain,
          frequency: frequency
      };

      database.ref().push(newTrain);

      return false; 
  })





















