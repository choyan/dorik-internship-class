const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function isOdd(x) {
  return x % 2 != 0;
}

function isEven(x) {
  return x % 2 === 0;
}

function isDividedByThree(x) {
  return x % 3 === 0
}

function filterFunction(arr, callback) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]) ? filteredArr.push(arr[i]) : null;
  }
  return filteredArr;
}

console.log(filterFunction(arr, isOdd))
console.log(filterFunction(arr, isEven))
console.log(filterFunction(arr, isDividedByThree))


// HOC = Higher Order Component

function Main(children){
  return (
    <Layout>
      {children}
    </Layout>
  )
}

Main(Blog)