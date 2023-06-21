const example = document.getElementById("main-box");
console.log(example.getBoundingClientRect());

//DOMRect {x: 100, y: 100, width: 506, height: 200, top: 100, …}
console.log(example.offsetTop); // 100
console.log(example.offsetLeft); // 100
console.log(example.clientLeft); // 15 this is beacuse of border
console.log(example.clientTop); // 15 this is beacuse of border
console.log(example.offsetWidth); // 300
console.log(example.offsetHeight); // 200
console.log(example.clientWidth); // 270
console.log(example.clientHeight); // 170
console.log(example.scrollHeight); // 410
console.log(example.scrollTop); // 0 depends of how much we scrolled

console.log(window.innerWidth);
console.log(window.innerHeight);

// better way to find hwight and width of window
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
