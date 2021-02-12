// Primitive value: string, number, boolean, null, undefined.

// Object: myObject --> Object.protoype --> null
// Array: myArray --> Array.prototype --> Object.protype --> null
// Function: myFunc --> Funtion.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean: --> Boolean:.prototype --> Object.prototype --> null
const product = "computer";
console.log(product.split(""));
