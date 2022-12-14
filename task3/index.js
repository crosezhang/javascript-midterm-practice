// You may not change the signature of min()
function min() {
  return arguments.length !== 0 ? Math.min(...arguments) : undefined;
}

console.log(min()); // undefined
console.log(min(1)); // 1
console.log(min(1, 0)); // 0
console.log(min(1, 0, 2, -3, 5)); // -3