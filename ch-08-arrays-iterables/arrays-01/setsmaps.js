/* === Working with Sets === */
// const ids = new Set([1, 2, 3, "Hi", "from"]);

// console.log(ids.has(1));

// ids.add(2);
// ids.delete("from");

// console.log(ids);

/* 
var Set: SetConstructor
new <any>(iterable?: Iterable<any> | null | undefined) => Set<any> (+1 overload)
*/
// for (const entry of ids.entries()) {
//   console.log(entry);
// }
/* 
  entries() Set<number>.entries(): IterableIterator<[number, number]>
  Returns an iterable of [v,v] pairs for every value v in the set.
*/

/* === Working with Maps === */
const person1 = { name: "Max" };
const person2 = { name: "Manuel" };

const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);

personData.set(person2, [{ date: "two weeks ago", price: 45 }]);
/* 
  set()  Map<{ name: string; }, { date: string; price: number; }[]>.set(key: {
    name: string;
  }, value: {
    date: string;
    price: number;
  }[]): Map<{
    name: string;
  }, {
    date: string;
    price: number;
  }[]>

  Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
*/
console.log(personData);

console.log(personData.get(person1));
/* 
  get() Map<{ name: string; }, { date: string; price: number; }[]>.get(key: {
    name: string;
    }): {
    date: string;
    price: number;
    }[] | undefined

  Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

  @returns — Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
*/

// get values and keys
for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

// get only keys
for (const key of personData.keys()) {
  console.log(key);
}

// get only values
for (const value of personData.values()) {
  console.log(value);
}

console.log(personData.size);
