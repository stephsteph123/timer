const sentence = "hello there from lighthouse labs";
v = 0;
for (const char of sentence) {
  v = v + 30
  setTimeout(() => {
    process.stdout.write(char)
  }, v) 
}

//need to breakdown by letter (.split)
//need to change the delay time per letter
//