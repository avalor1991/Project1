
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBNZEuVLMqW1ShLVcaqAl56qekPAMEorgg",
    authDomain: "bandana-30ebf.firebaseapp.com",
    databaseURL: "https://bandana-30ebf.firebaseio.com",
    projectId: "bandana-30ebf",
    storageBucket: "",
    messagingSenderId: "216379677416"
  };
  firebase.initializeApp(config);

  var dataRef = firebase.database();

  var artist;
  // picture variable from bandsintown
  var picture;
  var count = 0;

  dataRef.ref().limitToLast(5).on("child_added", function(yellow) {  
    var sv = yellow.val();
    $("#recentSearch").text(sv.artist);  
    artistName = sv.artist;
    console.log(artistName);
    function doTheThing(){
    // add recent seach div with "recent-search"
      var newRecentSearchCard = $('<div class="card" style="width: 18rem;">');
      var newRecentSearchCB = $('<div class="card-body">');
      //response.name from bandsintowm
      var artistNameCD = $("<h5 class='card-title'>").text(artistName);
      //response.thumb_url from bandsintowm
    //   var artistImageCD = $("<img class='card-img-top'>").attr("src", artistImage);
    
      newRecentSearchCB.append(artistNameCD);
      newRecentSearchCard.append(newRecentSearchCB);
      $("#recent-search").append(newRecentSearchCard);
      count ++;
    };
          
doTheThing();

}, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});


$("#search-btn").on("click", function(event) {
    event.preventDefault();
    
    artist = $("#artist-input").val().trim();
    genre = $("#genre-input").val().trim();
    location = $("#location-input").val().trim();
    venue = $("#venue-input").val().trim();
    startDate = $("#start-date-input").val().trim();
    endDate = $("#end-date-input").val().trim();

    $("#artist-input").val("");
    $("#genre-input").val("")
    $("#location-input").val("");
    $("#venue-input").val("");
    $("#start-date-input").val("");
    $("#end-date-input").val("");
    
    console.log(artist);


    dataRef.ref().push({
        artist: artist,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
});

