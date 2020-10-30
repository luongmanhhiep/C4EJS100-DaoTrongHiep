const inventory = [
    {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5,
    },
    {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1,
    },
    {
        name: 'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
    },

    {
        name: 'Asus Zenbook',
        brand: 'Asus',
        price: 20000,
        quantity: 4,
    },
    {
        name: 'HP Pavilion',
        brand: 'HP',
        price: 14000,
        quantity: 7,
    },
];
let inventoryByBrand = {
    asus:[],
    dell:[],
    hp:[],
};
for(i = 0;i < inventory.length ;i++ ){
    x = inventory[i].brand;
    inventoryByBrand.push(x);
};
console.log(inventoryByBrand);

prompt('Which Brand');
c = 0
string = ''
for(let item of inventoryByBrand){
    string += '\n' + item.name
    c += item.price
}
alert(inventoryByBrand[item] + ("\n") + 'With total value: ' + c);