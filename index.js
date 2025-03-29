

// Collection Functions (Arrays or Objects)

function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
        callback(value);
    }
    return collection;
}

function myMap(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let newArr = [];
    for (let value of values) {
        newArr.push(callback(value));
    }
    return newArr;
}

function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let startIndex = 0;
    if (acc === undefined) {
        acc = values[0];
        startIndex = 1;
    }
    for (let i = startIndex; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
        if (predicate(value)) return value;
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let newArr = [];
    for (let value of values) {
        if (predicate(value)) newArr.push(value);
    }
    return newArr;
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

// Array Functions

function myFirst(array, n) {
    return n !== undefined ? array.slice(0, n) : array[0];
}

function myLast(array, n) {
    return n !== undefined ? array.slice(-n) : array[array.length - 1];
}

// Object Functions

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}

// Bonus Functions

function mySortBy(array, callback) {
    return [...array].sort((a, b) => (callback(a) > callback(b) ? 1 : -1));
}

function myFlatten(array, shallow = false, newArr = []) {
    for (let item of array) {
        if (Array.isArray(item)) {
            if (shallow) {
                newArr.push(...item);
            } else {
                myFlatten(item, false, newArr);
            }
        } else {
            newArr.push(item);
        }
    }
    return newArr;
}
