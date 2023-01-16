'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    let answerGiven = prompt(`${this.question}
${this.options.join('\r\n')}
(Write option number)`);

    if (answerGiven >= 0 && answerGiven < this.options.length) {
      this.answers[answerGiven]++;
    } else {
      alert(
        `You have to pick a number between 0 and ${this.options.length - 1}.`
      );
    }

    if (Math.floor(Math.random() * 2) === 0) {
      return this.displayResults('array');
    } else {
      return this.displayResults('string');
    }
  },

  displayResults(type) {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    } else {
      alert(
        `The type of display must be defined. It's either a 'string' or an 'array'.`
      );
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// BONUS BGC
// var answers = [5, 2, 3];
var answers = [1, 5, 3, 9, 6, 1];

const displayBonusResultsArray = poll.displayResults.bind(this, 'array');
const displayBonusResultsString = poll.displayResults.bind(this, 'string');
displayBonusResultsArray();
displayBonusResultsString();

// cleaner solution with call() method
poll.displayResults.call({ answers: [5, 2, 3] }, 'array');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
