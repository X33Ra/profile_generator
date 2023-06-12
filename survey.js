// Since we'll be surveying the user, we need a nice way to ask questions and fetch answers.
// Tips:
// Instead of reading one character at a time, as we've done with stdin directly, Node has a built-in module to read one line at a time.

// Use their example code (copied below) to serve as our starting "boilerplate" code.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});