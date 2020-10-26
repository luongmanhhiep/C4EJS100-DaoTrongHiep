let phone = [
    {
        name: 'Xiaomi portable charger 20000mah',
        brand: 'Xiaomi',
        price: 428,
        color: 'White',
        category: 'Charger',
    },
    {
        name: 'VSmart Active 1',
        brand: 'VSmart',
        price: 5487,
        color: 'Black',
        category: 'Phone',
    },
    {
        name: 'IPhone X',
        brand: 'Apple',
        price: 21490,
        color: 'Gray',
        category: 'Phone',
    },
    {
        name: 'Samsung Galaxy A9',
        brand: 'Samsung',
        price: 8490,
        color: 'Blue',
        category: 'Phone',
    }
];
console.log('5.1: Print/log name and price of all the products out');
for (let phones of phone) {
    console.log('--------------------------------');
    console.log(' Name: ' + phones['name']);
    console.log(' Price: ' + phones['price']);
}
console.log("\n");
console.log('5.2: Write a script printing/logging out the products with their number, then print/logging out the details of a product with its position entered by users');
for (let index in phone) {
    console.log((Number(index) + 1) + ' Name: ' + (phone[index]['name']));
    console.log(' Price: ' + (phone[index]['price']));
};
let z = prompt('Enter phone position:');
for (let x in phone[z - 1]) {
    console.log(x + ': ' +  (phone[z - 1][x]))
}


console.log("\n");
console.log('5.3: Write a script printing/logging out the products based on category input by users');
let category = prompt('Enter your category?');
for (let phones of phone) {
     let lower = phone.Category.toLowerCase();
     if (lower == category.toLowerCase()) {
         console.log('--------------------------------');
         console.log('Name: '+(phone['Name']));
         console.log('Price: '+ (phone['Price']));
     }
 };
 console.log("\n");
 console.log('5.4: Add providers to each product')
 let providers = [['Phukienzero', 'Dientuccc'], ['Tgdd', 'DDghn', 'VhStore'], ['Tgdd'], ['Tgdd']];
for (let index in phone) {
    phone[index]['Providers'] = providers[index];
}
console.log("\n");
console.log('5.5:(Optional) Search the products based on the wanted provider entered by users, if you need more directions, find the hints at the end of this homework ');

