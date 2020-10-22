// Ex 6: Write a script asking users to enter a sequence of numbers, the numbers are separated by commas, find the smallest number and log it out to users
let n = prompt('enter a sequence of numbers,separated by commas');
n.split('');
x = Math.min.apply(Math,n);
alert('The smallest number is: ' + x);