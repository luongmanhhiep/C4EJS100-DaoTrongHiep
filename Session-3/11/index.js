// Ex 11:Write a script asking users to enter a sequence of Numbers, separated by commas (,). Create a new array containing only the odd Numbers of the entered sequence. If you need hints, they are at the end of this homework
let n = prompt('Enter a sequence of Numbers, separated by commas (,)')
let n1 = n.split(',').map(n1 => + n1);
let odd = [];
for (let i=0; i<n1.length; i++) {
    if (n1[i] % 2 == 1) odd.push(n1[i]);
}
alert(n +'=>' + n1)