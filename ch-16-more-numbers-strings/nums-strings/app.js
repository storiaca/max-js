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

/* Floating Point (Im)Precision */

console.log(0.2 + 0.4); // 0.6000000000000001

// ali ovo nije jedako 0.6
console.log(0.2 + 0.4 === 0.6); // false

// to je zbog binarnog sistema koji js koristi i decimalnog u kom mi radimo

// ako uradimo ovo sa brojem, mozemo da vidimo njegovu vrednost u binarnom sitemu
console.log((1).toString(2)); // 1 binarno
console.log((5).toString(2)); // 101 binarno

console.log((1 / 5).toString(2)); // 0.001100110011001100110011001100110011001100110011001101 binarno

// deljenjem u decimalnom sistemu dobijamo ovaj broj gore u binarnom, tako radi js

console.log((1 / 5).toString(10)); // 0.2 decimalno

// ovaj argument u toString je baza

// problem moze da resi metoda toFixed

console.log((0.2).toFixed(20)); // 0.20000000000000001110

// resenje za ono na pocetku 0.2 + 0.4
console.log((0.2 + 0.4).toFixed(1)); // daje 0.6 ali kad se uradi === vraca false, ovo je cisto da se prikaze rezultat korisniku

// da bi dobili tacnu preciznost, sve nase brojeve mnozimo sa 100 tako radimo sa integer, kao za shop sto sve vrendosti pretvaramo u cente i pa mnozimo sa 100 i onda vracamo u decimalne vrednosti
console.log(20.2 * 100); // 2020

/* The BigInt Type */

// sluzi da bi mogli da prikazemo brojeve iznad Number.MAX_SAFE_INTEGER
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
// kreiramo BigInt tako sto dodamo n na kraju broja:
console.log(90071992547409916769n);

// ovo se interno ne gkeda kao 64-obitni broj kako js tretira brojeve, veca kao string

// moze da bude i negativan broj, samo nemamo floating tacku za ove brojeve nema .nesto, 90071992547409916769.435n

// mozemo da ih koristimo ovako:
console.log(10n - 4n);
// ali ne mozemo da pisemo 10n - 4, nema mesanja obicnih i BigInt brojeva

/* The Global "Number" and "Math" Objects */

// imamo Number objekat na kome imamo dosta propertija,jedan od njih je Infinity
// imamo Infinity i -Infinity tipove, to je kad delimo sa 0, 1/0,

// takodje mozemo da proverimo da li je true ili false sa isFinite metodom
console.log(Number.isFinite(10)); // true
console.log(Number.isFinite(Infinity)); // false

// takodje zanimljiv objekat je Math, koji takodje ima dosta propertija, Math.E, Math.PI, Math.sqrt sve vezano za matematicke operacije
console.log(Math.PI); // 3.141592653589793

/* Example: Generate Random Number Between Min/ Max */

function randomIntBetween(min, max) {
  // min: 5, max: 10
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomIntBetween(5, 10));

/* Exploring String Methods */

// mozemo da kreiramo string ovako "" ili `${1}`

// string ima odredjeni property kad se kreira kao objekat
console.log("hello".toUpperCase());
console.log("hello".startsWith("he")); // true
