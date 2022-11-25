// //Instruction
// Implement an alarm clock / timer which will beep after a 
// specified amount of time has passed. 
// The user can specify an unlimited number of alarms using command line arguments

//notes:
//run in node repl
// process.stdout.write('\x07'); node system beep
//example: node timer1.js 10 3 5 15 9 
//process.argv = command line

const process = require('process');

let args = (process.argv).slice(2)
args.sort((a,b) => {
  return a - b;
})

for (a of args) {
setTimeout(() => {
  process.stdout.write('\x07');
}, a*1000);
console.log(a)
};

