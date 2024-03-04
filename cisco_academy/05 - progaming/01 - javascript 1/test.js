// let x = false || true;
// let y = "true" && "false";
// let z = false && true;
// console.log(`${x} ${y} ${z}`);

// let a = true && 20;
// let b = 0 || 20;
// // let c = 0 && 20;
// // console.log(`${a} ${b} ${c}`);

// let a = 20 + "10";
// let b = 20 + +"10";
// let c = 20 + -"10" + "10";
// let d = "10" - "10" + "100";
// let e = "A" - "B" + 0xa;
// console.log(`${a}, ${b}, ${c}, ${d}, ${e}`);

// // let x = [10, 20, 30, 40];
// // let y = [50, 60];
// // x.reverse().push(y);
// // console.log(x.length);

// // for (let a = 1; a < 10; a += 2) {
// //   console.log(a);
// // }

// let colors = ["red", "green", "blue"];
// for (let c of colors) console.log(c);

// let route = { distance: 131, elevation: 1.4 };
// for (let k in route) console.log(k);

// let a = (n) => {
//   return n > 2 ? n * a(n - 1) : 2;
// };
// console.log(a(6));

// let mult = function (a) {
//   return function (b) {
//     return a * b;
//   };
// };

// let x = mult(2)(10);
// console.log(x); // -> 20
let cmp = (a, b) => a - b;

x = [40, 10, 30, 20, 50];
x.sort(cmp);
console.log(x);

const a = "hello";
try {
  console.log(a.toUpperCase());
} catch (error) {
  console.log(a);
} finally {
  console.log(a);
}
