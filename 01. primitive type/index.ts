/**
 * Primitive type - String, Number, Boolean, Null,
 * Undefined, BigInt, Symbol
 * */
let userName: string = 'Szabolcs';
let city: string = 'Miskolc';
let age: number = 50;
const PI: number = 3.1415926535;
let isProgrammer: boolean = true;
let data: string | null = null;
let result: number | undefined = undefined;
let bigNumber: bigint = 123456789123456789n;


console.log(`The user name is ${userName} and he lives ${city}.`);
console.log(`The user age is ${age}.`);
console.log(`The PI value is ${PI}`);
if (isProgrammer) {
    console.log(`I'm a computer science.`);
}
console.log(data);
console.log(result);
console.log(bigNumber);
console.log(Number.MAX_SAFE_INTEGER);

let isBigNumberGreater : boolean = bigNumber > Number.MAX_SAFE_INTEGER;
let isBigger : string = isBigNumberGreater ? "true" : "false";
console.log(isBigger);

