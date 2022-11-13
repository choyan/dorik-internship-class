// Currying Function

const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d + e;
      };
    };
  };
}


console.log(sum(1)(2)(3)(4)); // log 20