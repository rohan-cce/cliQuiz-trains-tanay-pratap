/* CLI quiz app using js*/
/* Here i have created a quiz based on indian railways */
/*Question and answers can be edited as per requirements of user */
var readlineSync = require("readline-sync"); 
// for user input
const chalk = require('chalk'); 
//chalk is a library that provides a simple and easy to use interface for applying ANSI colors and styles to your command-line output

var userScore = 0;
var userName = readlineSync.question("What's your name? ");

console.log("Welcome "+ chalk.blueBright(userName));

var highScores = [
  {
    name: "xyz",
    score: 7,
  }
]


function game(question, answer) {
  var userAns = readlineSync.question(question);

  if (userAns.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Right Answer!"));
    userScore = userScore + 1;
    
  } else {
    console.log(chalk.red("Wrong Answer!"));
  }
  console.log(chalk.yellowBright("------------------"));
  console.log(chalk.magentaBright("current score is: ", userScore));

}
var questions = [{
  question: chalk.cyan("1. What is the symbol of Indian Railways?\na) Tiger\nb) Horse\nc) Elephant\nd) None of these\n"),
  answer: "c"
}, {
  question: chalk.cyan("2. Which is the biggest railway station in India?\na) Gorakhpur Railway Station\nb) Bilaspur Railway Station.\nc) Trivandrum Central, Kerala\nd) None of these\n"),
  answer: "a"
},
{
  question: chalk.cyan("3.How many zones are there in Indian Railways\na) 21\nb) 16\nc) 17\n"),
  answer: "c"
},
{
  question: chalk.cyan("4.Which is the first Railway station in India?\na) Chennai Central railway station\nb) Victoria Terminus\nc) Royapuram railway station\n"),
  answer: "b"
},
{
  question: chalk.cyan("5.When was first electric train started in India?\na) 1925\nb) 1950\nc) 1965\n"),
  answer: "a"
},
{
  question: chalk.cyan("6.What is the name of present (as of March 2019) railway minister of India?\na) Suresh Prabhu\nb) Piyush Goyal\nc) Ravi Shankar Prasad\nd) None of these\n"),
  answer: "b"
},
{
  question: chalk.cyan("Which zone is the largest in Indian Railways?\na) Eastern Railway\nb) Northern Railways\nc) Central Railway\n"),
  answer: "b"
}];

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  game(currentQuestion.question, currentQuestion.answer)
}
chalk.rgb(15, 100, 204).inverse('Hello!')
console.log(chalk.cyanBright.bgRed.bold("hey "+userName+" You Scored: ", userScore));
console.log("Current Leaderboard",highScores);
if (userScore >= highScores[0].score){
    console.log("congratulation You have scored high score ");
    console.log(chalk.red.bold("Please send me the screen shots of your score so that i Can update that here \n"));
    console.log(chalk.cyan.bold(" Thanks for taking the quiz "));
}
