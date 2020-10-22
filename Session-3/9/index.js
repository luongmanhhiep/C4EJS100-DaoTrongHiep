// Given the array

const colors = ['gray', 'blue', 'purple', 'cyan','red','yellow'];

// Use JS Turtle, to draw the following shapes


for (let i = 1; i <= 6; i++) {
  for (let j = 0; j < 6; j++) {
    color(colors[i-1]);
  	fd(50*i);
    rt(90);
  }
}