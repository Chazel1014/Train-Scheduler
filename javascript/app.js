swal("CHOO CHOO MFER");

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDwvBZ3_qCemmiHE2YBO-MQ3yO1GCVthbE",
    authDomain: "train-schedule-e8b72.firebaseapp.com",
    databaseURL: "https://train-schedule-e8b72.firebaseio.com",
    storageBucket: "train-schedule-e8b72.appspot.com",
    messagingSenderId: "249296000053"
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
      })

      return false; 
  })





















