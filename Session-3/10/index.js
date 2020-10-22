//Write a script asking users to enter a sequence of names, separated by commas (,), Create a new array containing the names, each surrounded with <>. If you need hints, find them at the end of this homework

let n = prompt('Enter sequence of names');
let name = n.split(',')
alert(n)
// 10.1
let n1 = [];
for (i=0;i<name.length;i++) {
    n1.push('<' + name[i] + '>');
  alert(n1)
}