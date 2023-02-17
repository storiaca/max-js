/* === Working with Sets === */
const ids = new Set([1, 2, 3, "Hi", "from"]);

console.log(ids.has(1));

ids.add(2);
ids.delete("from");

console.log(ids);

/* 
var Set: SetConstructor
new <any>(iterable?: Iterable<any> | null | undefined) => Set<any> (+1 overload)
*/
for (const entry of ids.entries()) {
  console.log(entry);
}
/* 
  entries() Set<number>.entries(): IterableIterator<[number, number]>
  Returns an iterable of [v,v] pairs for every value v in the set.
*/
