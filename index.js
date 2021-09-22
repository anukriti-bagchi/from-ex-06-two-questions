var readlineSync = require('readline-sync');
var score = 0;

var questionOne = "Am I older than 25? ";
var answerOne = "yes";
//input
var userAnswer = readlineSync.question(questionOne); 
console.log("You entered " + userAnswer);

//processing
if (userAnswer === answerOne) {
  //output
  console.log("You are right!");
  score = score + 1;
  console.log("Score is: " + score)
}else{
  //output
 console.log("You are wrong!");
 score = score - 1;
 console.log("Score is: " + score)
}



var questionTwo = "Am I from Mirzapur? ";
var answerTwo = "No";
//input
var userAnswer = readlineSync.question(questionTwo); 
console.log("You entered " + userAnswer);

//processing
if (userAnswer === answerTwo) {
  //output
  console.log("You are right!");
  score = score + 1;
  console.log("Score is: " + score)
}else{
  //output
 console.log("You are wrong!");
 score = score - 1;
 console.log("Score is: " + score)
}









