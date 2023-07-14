/* How Numbers Work & Behave in JavaScript */

// maksimalan integer
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// isti broj moze da se dobije ovako:
console.log(Math.pow(2, 53) - 1); // 9007199254740991

// moze da se prikaze i vezi za jedan ali te kalkulacije nece raditi
console.log(Math.pow(2, 53)); // 9007199254740992

console.log(Math.pow(2, 53) + 1); // 9007199254740992 isto

// imamo i za minimum
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// maksimalan decimalni broj
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
