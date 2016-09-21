export function test(name) {
    if (name.indexOf('a') !== -1) {
        console.log(`This name: ${name} contains 'a'!`);
    }
}

export function hello(name) {
    console.log('Privet', name);
}

export function newTest(testID) {
    if (testID) {
        console.log('I am tested!');
    }
}

function someNewFunction(name) {
    return name;
}

export function newFeature() {
    console.log('I am not new anymore!');
}

export function upgrade() {
    console.log('I am new upgrade!');
}
