const fromDollarToYen = (dollar)=> {
    yen = dollar * 109.8 
    return yen;
}
const fromEuroToDollar = (euro) => {
    dollar = euro * 1.2 
    return dollar
}
const fromYenToPound = (yen) => {
    pound = yen * 0.0066
    return pound
}

console.log(fromEuroToDollar(10))
console.log(fromDollarToYen(10))
console.log(fromYenToPound(10))

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
