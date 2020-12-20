function findOppositeNumber(n, inputNumber) {
   
    let x = ( inputNumber+(n/2) )%n;
    if(inputNumber < x) {
        result = x ;
    } else {
        result = x;
    }
    return result;
}
console.log(findOppositeNumber(10, 2));
console.log(findOppositeNumber(10, 6));