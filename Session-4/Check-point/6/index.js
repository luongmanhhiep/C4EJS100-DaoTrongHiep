// Object containing array
console.log('1.Create an object named movie, with title, year and rate and characters. The characters contain at least 3 characters of the movie');
let movie = {
    title: 'Attack on titan',
    year: 2013,
    rate: 8.8,
    casts: 'Eren Armin Mikasa'
}
console.log("\n");
console.log('2.Print or log out the movie data in the following format (Note, remember the spread operator … for fast logging an array):');
for(let prop in movie){
    if(movie.hasOwnProperty(prop)){
      console.log(prop+ ': ' + movie[prop]);
    }
}

console.log("\n");
console.log('Add new cast to the movie and then log it back');
movie.casts = 'Eren Armin Mikasa levi';