function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterate(array) {
    for (let iterator of array) {
        yield iterator
    }
}

const i = iterate(['Daniel', 'Eberlin', 'Ronny'])
console.log(i.next());