function randoms(a,b){
Math.floor(Math.random()*(b-a)+a);
};
const x = randoms(4, 16);
if (x < 4) {
  console.log('Failed: the number is smaller than 4');
} else if (x > 16) {
  console.log('Failed: the number is bigger than 16');
} else {
  console.log('Passed, bravo');
}
