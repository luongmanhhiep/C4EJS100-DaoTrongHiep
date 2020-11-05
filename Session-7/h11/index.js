let x = document.getElementById('upper');
console.log(x);
let y = document.getElementById('userName');
console.log(y);
let z = document.getElementById('result_div');
console.log(z);
var name;
y.addEventListener('key', (i) => {
    name = i.target.value;
    
    console.log(name);
});
x.addEventListener('click', () => {
    //console.log(i.target);
    name = name.toUpperCase();
    z.innerHTML = name;
});