function finishFunction() {
  alert("Thank you for completing the quiz.");
}

function rndm_colour(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function change_heading() {
  
  colour = rndm_colour();
  document.getElementById("heading").style.color = colour;
}
function show_hide(){
  if (document.getElementById("extraInfo").style.display == 'none'){
    document.getElementById("extraInfo").style.display = 'block';
  }else{
    document.getElementById("extraInfo").style.display = 'none';}}

//Quiz Validation
var score;
function validateName(){
  var name = document.forms.Quiz.fullname.value;
  if(name===""){
    alert("Please fill out your name");
    return false;
  }
  else{
    return true;
  }
}
function validateQ1() {
  var x = document.forms.Quiz.elements.Q1.value;
  if (x === "") {
    alert("One radio button must be selected");
    return false;
  }else{
    return true;
  }
}
function validateQ2() {
  var x = document.forms.Quiz.elements.Q2.value;
  if (x ==="") {
    alert("One radio button must be selected");
    return false;
  }else{
    return true;
  }
}
function validateQ3() {
  var x;
  x = document.forms.Quiz.Q3.value;
  if (x === "" ){
    return false;
  } else {
    return true;
  }
}
function validateQ4(){
  var answer = document.forms.Quiz.Q4.value;
  if(answer=== ""){
    return false;
  }
  else{
    return true;
  }
}
function validateRating() {
  var x;
  x = document.forms.Quiz.rating.value;
  if (x === 0) {
    return false;
  } else {
    return true;
  }
}
function validateQuestions() {
      if (validateName() && validateQ1() && validateQ2()&&validateQ3()&&validateQ4()&&validateRating()){
        return true;
      }else{
        alert("You have not answered one or more questions, please answer all questions to proceed.");
        return false;
      }
    }
function checkAnswers(){
  var score = 0;
  quiz = document.forms.Quiz.elements;
  if(validateQuestions()){ 
  answer1 = quiz.Q1.value;
  answer2 = quiz.Q2.value;
  answer3 = quiz.Q3.value;
  answer4 = quiz.Q4.value;
  alert(answer1);
  if(answer1 === "Argon"){
    score+=1;
  }
  if(answer2 === "Reforestation"){
    score+=1;
  }
  if(answer3 === "100"){
    score+=1; 
  }
  if(answer4 === "CFC"|| answer4==="Chlorofluorocarbons"){
    score+=1;
  }
  alert ('Well done, your score was... ' + score+"/4");
  }
}