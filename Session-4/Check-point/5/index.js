console.log('1.Create an array called movies, containing at least 3 movie data with the same structure all have title, year and rate (you can add more property if you like)');
let movie = [{
    title: 'The dark nigth rises',
    year: 2012,
    rate: 8.4,
},
{
    title: 'One Piece',
    year: 1999,
    rate: 9,
},
{
    title: 'Naruto',
    year: 2002,
    rate: 8,
}];
console.log(movie);
console.log("\n");
console.log('2.Print or log out the first movie from movie list');
console.log(movie[0]);
console.log("\n");
console.log('3.Print or log out the title of the last movie from movie list')
console.log(movie[movie.length-1]['title']);
console.log("\n");
console.log('4.Use a loop to print or log out all of the movie in the movie list');
for(let  item in movie){
    console.log(movie[item]);
}
console.log("\n");
console.log('5. Use a loop to print or log out all of the movie in the movie list, the data is prettified as follow')
for (let item of movie) {
    console.log('---------------------');
    console.log(item['title']);
    console.log(item['year']);    
    console.log(item['rate']);
}
console.log("\n")
console.log('6. Increase the rate of the last movie in the movies list by 0.7')
let x = movie['rate']
movie[movie.length-1][Number(x) + 0.7]
console(movie)