const fnAsync = () => {
    return new Promise((res, rej) => {
        true
            ? setTimeout(() => res('Asyyynncc'), 3000)
            : rej(new Error('Error'))
    })
}


const anotherFn = async () => {
    const somethig = await fnAsync()
    console.log(somethig);
    console.log('Helooo');
}

console.log('Before');
anotherFn()
console.log('After');