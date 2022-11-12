var readlineSync = require("readline-sync"); 

var score =0;

var userName = readlineSync.question("What's your name ");
console.log("Welcome " + userName + " Let's play a game!! ");

var highscore =[
  {
    name:"Roshan",
    score:8,
  },

  {
    name: "Ash",
      score:7,
  },
]

function play(question, answer){
  var myans  = readlineSync.question(question);

  if(myans.toLowerCase() === answer){
    console.log("right!!")
    score++;
  }
  else{
    console.log("you're wrong!!!")

  }

  console.log("current score: ", score);
  console.log("----------------------")
}




var quest1 = {
  quest: "What is the orange part of an egg called?",
  ans: "egg yolk",
}

var quest2 = {
   quest: "How many legs do insects have?",
  ans: "six legs",
}

var quest3 = {
   quest: "What is a baby kangaroo called?",
  ans: "joey",
}

var quest4 = {
   quest: "What starts with 'E' and ends with 'E' but only has one letter in it?",
  ans: "envelope",
}

var quest5 = {
   quest: "What can be broken but never held?",
  ans: "promise",
}

var quest6 = {
   quest: "Which word in the dictionary is always spelled incorrectly?",
  ans: "incorrectly",
}

var quest7 = {
   quest: "Bottom up approach is also known as?",
  ans: "Tabluar method",
}

var quest8 = {
   quest: "There are three boxes, one contains only apples, one contains only oranges, and one contains both apples and oranges. The boxes have been incorrectly labeled such that no label identifies the actual contents of the box it labels. Opening just one box, and without looking in the box, you take out one piece of fruit. By looking at the fruit, you can immediately label all of the boxes correctly. Which box did you open?",
  ans: "Containing both apples and oranges",
}


var list = [quest1,quest2,quest3,quest4,quest5,quest6,quest7,quest8];

var tc=1,fc=1,sc=1;
for(var i=0;i<list.length;i++){
  play(list[i].quest, list[i].ans);
  if(tc>0&& score>2){
    console.log("Okay okay, let's raise the bar a bit");
    tc--;
  }
  if(fc>0 &&score>4){
    console.log("Hmmmm, seems like you've got good IQ");
    fc--;
  }
  if(sc>0&&score>7){
    console.log("Well i feel you're difinitely a computer engineer");
    sc--;
  }
}



console.log("YAY!!, you scored : ", score)
console.log("The best score till now are: ");
for(var i=0;i<highscore.length;i++){
  console.log(highscore[i].name + ": " + highscore[i].score);
}

console.log("------------------------");
console.log("If you're sore is the best, then send me the screenshot");