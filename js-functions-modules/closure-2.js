function makeAdder(x) {
  console.log(x, 'from outside')
  return function (y) {
    console.log(x, 'from inside')
    return x + y;
  };
}

console.log(makeAdder(5)(2))

// makeAdder() => (y) => x + y
// add5() => 5 => output function => expect => another new argument
// add5(2) => x + y => 5 + 2 => output


// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// const final5 = add5(2)
// const final10 = add10(2)

// console.log(final5); // 7
// console.log(final10); // 12

// console.log(makeAdder(5)(2))