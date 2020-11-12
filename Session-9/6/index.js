function calculate(x1,y1,x2,y2){
    Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2))
};
const x= calculate(3, 10, 0, 6);
if (x !== 5) {
  console.log('Failed: the calculation is wrong');
} else {
  console.log('Passed, bravo');
}

