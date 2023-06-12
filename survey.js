// Since we'll be surveying the user, we need a nice way to ask questions and fetch answers.
// Tips:
// Instead of reading one character at a time, as we've done with stdin directly, Node has a built-in module to read one line at a time.

// Use their example code (copied below) to serve as our starting "boilerplate" code.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

const questions = [
  'What\'s your name? Nicknames are also acceptable :)',
  'What\'s an activity you like doing?',
  'What do you listen to while doing that?',
  'Which meal is your favourite (e.g., dinner, brunch, etc.)?',
  'What\'s your favourite thing to eat for that meal?',
  'Which sport is your absolute favourite?',
  'What is your superpower? In a few words, tell us what you are amazing at!'
];

const answers = {};

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});

// this is one big nested callback

// Instead of asking the user about what they think of Node.js, we can ask them the following questions, in order:

// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!