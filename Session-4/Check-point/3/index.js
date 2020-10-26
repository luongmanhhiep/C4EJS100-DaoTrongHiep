let movie = {
    title: 'The dark nigth rises',
    year: 2012,
    rate: 8.4,
};
// 1. Change the rate of the movie to 8.7
movie.rate = 8.7 ;
console.log(movie.rate);
// 2. Increase the rate of the movie by 0.5
let x = movie['rate']
console.log(Number(x) + 0.5)
 

// Write a script, asking users what they want to update and what is the update, perform the update and then log out the result
let y = prompt('what you want to update?')
let z = prompt('What is the update?')
movie[y] = z 
console.log(movie)