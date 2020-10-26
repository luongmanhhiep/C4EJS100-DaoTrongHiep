console.log('for and Object: Run the following code, observe and then answer the questions');
const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white',
};


for (let x in product) {
    console.log(x);
}
console.log("\n");
console.log('1.1:What does x receives from product, property or value?');
console.log('x là property của product, khi in ra ta nhận được property  ')
console.log("\n")
console.log('1.2: Use the for loop to print/log out the following output')
for(let x in product){
    if(movie.hasOwnProperty(x)){
      console.log(x+ ': ' + movie[x])
    }
}