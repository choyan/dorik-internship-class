// Argument
// output

// Impure function
// Pure function
const c = 20

// function pureAdd(a, b) {
//     return a + b
// }

// if(pureAdd(10, 15) === 25) {
//     console.log('test success')
// } else {
//     console.log('Test failed')
// }

function impureAdd(a, b) {
    return a + b + c
}

if(impureAdd(20, 30) === 60) {
    console.log('test success')
} else {
    console.log('Test failed')
}

// console.log(add(10, 10))

// console.log(add(20, 10))

const  [numb, setNumb] = useState(4)
const changeNumb = (numb) => setNumb(numb)


function useState(initialValue) {
    let numb = initialvalue;
    const setNumb = (arg) => {
        numb = arg
    }

    return [numb, setNumb]
}



function add(a,  b) {
    return a + b
}

const add = function(a, b) {
    return a + b
}

const add = (a, b) => {
    return a + b
}

const add = (a, b) => a + b