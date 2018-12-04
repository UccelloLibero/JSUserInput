var qAndA = [
{
  question: 'What is the tallest mountian in the USA?'
  answer: 'Denali'
},
{
  question: 'What is the largest river in the world?',
  answer: 'Amazon'
},
{
  question: 'How many continents are there?',
  answer: 'Seven'
}
];

var correctAnswers = 0;
var question;
var answer;
var response;
var update;
var correct = [];
var wrong = [];

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}


function makeList(arr) {
  var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i += 1) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

for (var i = 0; i < qAndA.length; i += 1) {
  question = qAndA[i].question;
  answer = qAndA[i].answer;
  response = prompt(question); // parseInt(prompt(question)); -- convert prompt dialog string into a number after asking the question if the answer in the array is a number
  if (response === answer) {
    correctAnswers += 1;
    correct.push(question);
  } else {
    wrong.push(question);
  }
}

update = 'You got ' + correctAnswers + ' question(s) right!';
update += '<h2>These are the questions you answered correctly:</h2>';
update += makeList(correct);
update += '<h2>These are the questions you answered incorrectly:</h2>';
update += makeList(wrong);
print(update);
