//Callbacks

function suma(a, b) {
    return a+b
}

function calc(a, b, callback) {
    return callback(a, b);
}

console.log(calc(1, 4, suma));


setTimeout(() => {
    console.log('Hello');
}, 2000);


function greeting(name) {
    console.log(`Hello ${name}`);
}

setTimeout(greeting, 2000, 'Daniel')