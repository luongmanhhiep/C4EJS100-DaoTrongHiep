//Ex 8: You are a shepherd who owns a flock of sheep
//8.1: Create an array to represent the sizes of your flock, and log all of your flock size, expected screen output:
let danCuu = [5,7,300,90,24,50,75];
alert('Hello, my name is Hiệp and here is my sheep sizes:'+ ("\n") + danCuu)
console.log(danCuu);
// 8.2: Add scripts to search for the biggest sheep in your list
console.log('Now my biggest sheep has size: '+ Math.max(danCuu) +'let is shave it! ');
//8.3: When your biggest sheer, its size will return to the default size, which is 8
danCuu.splice(1,1,8);
console.log('After searing, here is my flock'+ ("\n") +danCuu)
//8.4: In the following month, EVERY sheep in your flock grow, they have their size increased by 50. Log them out
for(i=0;i<danCuu.length;i++){
    danCuu[i] +=50;
}
console.log('MONTH 1');
console.log('One month has passed, my sheeps have grown, here are their sizes');
console.log(...sizes);
console.log('Now my biggest sheep has size: '+ Math.max(danCuu) +'let is shave it! ');
danCuu.splice(3,1,8);
console.log('After searing, here is my flock'+ ("\n") +danCuu)
// 8.5: Let’s do this for 4 months (or as long as you want)
for(i=0;i<danCuu.length;i++){
    danCuu[i] +=50;
}
console.log('MONTH 2');
console.log('One month has passed, my sheeps have grown, here are their sizes');
console.log(...sizes);
console.log('Now my biggest sheep has size: '+ Math.max(danCuu) +'let is shave it! ');
danCuu.splice(6,1,8);
console.log('After searing, here is my flock'+ ("\n") +danCuu)

// Month 3

for(i=0;i<danCuu.length;i++){
    danCuu[i] +=50;
}
console.log('MONTH 3');
console.log('One month has passed, my sheeps have grown, here are their sizes');
console.log(...sizes);

// 8.6: Write a program to calculate the total size of your sheep as well as the money you would have. Expected console output:
const n = (accumulator, currentValue) => accumulator + currentValue;
console.log('After searing, here is my flock: '+ danCuu.reduce(n) );
console.log('I would get: '+danCuu.reduce(n)*2);
