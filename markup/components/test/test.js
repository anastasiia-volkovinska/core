export function test(name) {
    if (name.indexOf('a') !== -1) {
        console.log(`This name: ${name} contains 'a'!`);
    }
}

export function hello(name) {
    console.log('Privet', name);
}

export function newTest() {
    console.log('some changes!');
}

function someNewFunction(name) {
    return name;
}
