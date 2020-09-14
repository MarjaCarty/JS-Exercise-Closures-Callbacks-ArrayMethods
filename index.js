// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *  A: Counter1 is a function that returns a function, allowing the count variable to be reused in each instance of the function, and counter2 just returns the global count's updated score. The global count's score is not reset with every function instance.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *  A: Counter1, as there is a function that reaches outside its scope into another function to grab a variable.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *  A: Counter1 is more useful when you need to track multiple scores, while counter2 is useful for tracking a single score.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  const randomScore = Math.floor(Math.random() * 3);
  return randomScore;

}

console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(num, callback){
  
  function inner() {
    let finalScore = 0;
    for (let i = 0; i <= num; i++) {
      finalScore = finalScore + callback();
    }
    return finalScore;
  }
  
  let scoreObj = {
    "Home": inner(),
    "Away": inner()
  }

  return scoreObj;
}

console.log(finalScore(9, inning));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

// function getInningScore(callback, num) {
//   let scoreBoard = {};
//   let score1 = 0;
//   let score2 = 0;
//   for (let i = 0; i <= num; i++) {
//     score1 = score1 += callback();
//     score2 = score2 += callback();
//     scoreBoard[`Inning ${i}`] = `${score1} - ${score2}`;
//   }
//   scoreBoard["Final Score"] = `${score1} - ${score2}`;
//   return scoreBoard;
// }

// function scoreboard(callback1, callback2, num) {
  
//   return callback2(callback1, num);
// }

// console.log(scoreboard(inning, getInningScore, 6));

function scoreboard(callback, num) {
  let score1 = 0;
  let score2 = 0;
  for (let i = 0; i <= num; i++) {
    score1 = score1 + callback();
    score2 = score2 + callback();
    console.log(`Inning ${i}: ${score1} - ${score2}`)
  }
  return `Final score: ${score1} - ${score2}`
}

console.log(scoreboard(inning, 9));
