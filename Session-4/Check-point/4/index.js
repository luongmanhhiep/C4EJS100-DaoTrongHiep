let movie = {
    title: 'The dark nigth rises',
    year: 2012,
    rate: 8.4,
};
// Upgrade Update script to check whether the property entered by users exist, if yes, perform as usual, if no, tell them that we will add new and perform create

let x = prompt('what you want to update?');
let a = movie[x];
if (a){
    alert(a);
}
else{
    alert(x + 'does not exist in our data,we will add new');
    let z = prompt('Enter the new data:')
    movie[x] = z
}
console.log(movie)