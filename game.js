var gamePattern= [];
var userClickedPattern=[];
var buttonColours =["red", "blue", "green", "yellow"];

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    // var randomNumber = Math.random();
    // randomNumber =randomNumber*4;
    // randomNumber = Math.floor(randomNumber);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  
  animatePress(userChosenColour);
});

function playSound(track){
  var audio = new Audio("sounds/"+track+".mp3");
  audio.play();
}

function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);

}