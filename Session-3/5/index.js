// Ex 5 :Write a script to ask users enter a sequence of numbers, the Numbers are separated by commas, calculate the sum of the numbers and show it to users
let n = prompt('Enter a sequence of numbers,separated by commas');
n.split('');
let reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(n.reduce(reducer));