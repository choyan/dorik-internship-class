// Promise()
// new Promise()
// async - await

const resolve = () => {
    console.log('Complete')
}

const reject = () => {
    consolelog('Rejected')
}

let asyncReq = new Promise((resolve, reject)=>{
    setTimeout(()  => resolve('Done'), 4000)
    // setTimeout(() => reject('Rejectedddd'), 2000)
})

async function asyncReq() {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        console.log(data)
        } catch {
            console.log('error')
    }
}

asyncReq
  .then((res) => {
    console.log('Fullfilled')
}).catch(rejected => {
    console.log('reject hoise')
}).finally(() => {
    console.log('Either resolve or reject, i dont care')
})