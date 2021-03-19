// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
};

function destructivelyPrependCat(name) {
    return cats.unshift(name);
};

function destructivelyRemoveLastCat() {
    return cats.pop();
};

function destructivelyRemoveFirstCat() {
    return cats.shift();
};

function appendCat(name) {
    let catsAppended = cats.concat(name);
    return catsAppended;
};

function prependCat(name) {
    let catsPrepended = [name, ...cats];
    return catsPrepended;
};

function removeLastCat() {
    let catsMinusOne = cats.slice(0,2);
    return catsMinusOne;
};

function removeFirstCat() {
    let catsWithoutFirstCat = cats.slice(1);
    return catsWithoutFirstCat;
};