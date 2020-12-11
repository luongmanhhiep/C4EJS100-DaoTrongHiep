function findOppositeNumber(n, Number) {
    const x = n / 2;
    return Number >= x ? Number - x : Number + x;
}

console.log(findOppositeNumber(10, 2));
console.log(findOppositeNumber(10, 6));