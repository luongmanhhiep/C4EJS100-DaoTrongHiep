

let movie = {
    title: 'The dark nigth rises',
    year: 2012,
    rate: 8.4,
};
// Log all of 3 the properties of the movie object to the console using 2 different ways
console.log('1.Read Object Way 1');
console.log(movie.title);
console.log(movie.year);
console.log(movie.rate);
console.log("\n")

console.log('2.Read Object Way 2');
console.log(movie['title']);
console.log(movie['year']);
console.log(movie['rate']);

// Log an non-existent property of the movie, director, what is the result?
console.log(movie.director);


//apply it to upgrade Read object, after users enter the property, check whether the property exists, if yes, show them the value, if no, tell them that
let x = prompt('What you want to know?');
let a = movie[x];
if (a){
    alert(a)
}
else{
    alert(x + 'does not exist in our data')
}