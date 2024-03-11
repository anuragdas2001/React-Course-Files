function sum(x, y, z) {
  return x + y + z;
}

const res = sum(10, 20, 30); //60

console.log(res);

function outermost(x) {
  return function inner(y) {
    return function innermost(z) {
      return x + y + z;
    };
  };
}

const outermostval = outermost(10);
console.log(outermostval);
const innerval = outermostval(20);
console.log(innerval);
const innermost = innerval(30);
console.log(innermost);

function logDetails(firstName) {
  return function logFullName(lastName) {
    return function logHobby(hobby) {
      console.log(`${firstName},${lastName},${hobby}`);
    };
  };
}

const ld = logDetails("Anurag")("Das")("Dev");
