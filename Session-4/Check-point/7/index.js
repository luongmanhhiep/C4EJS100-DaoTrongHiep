console.log('7: Object and Array mix structure');
console.log("\n");
console.log('7.1 Create an array named movies, containing at least three movies, all have title, year, rate and characters properties')
let movie = [{
    title: 'The dark nigth rises',
    year: 2012,
    rate: 8.4,
    casts: 'Bruce Wayne'
},
{
    title: 'One Piece',
    year: 1999,
    rate: 9,
    casts: 'Luffy Zoro Sanji'
},
{
    title: 'Naruto',
    year: 2002,
    rate: 8,
    casts: 'Naruto Sasuke Kakashi'
}];
console.log("\n");
console.log('7.2 :Log or print all the movies in the movies array');
for (let item of movie) {
    console.log('---------------------');
    console.log(item['title']);
    console.log(item['year']);    
    console.log(item['rate']);
    console.log(item['casts'])
};