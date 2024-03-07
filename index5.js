// Oppgave 1: Få det første elementet i en array
function getFirstElement(arr) {
    return [arr[0]];
}

let list1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(getFirstElement(list1)); // Output: ['a']

// Oppgave 2: Få det siste elementet i en array ved hjelp av lengde-metoden
function getLastElement(arr) {
    return [arr[arr.length - 1]];
}

let list2 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(getLastElement(list2)); // Output: ['f']

// Oppgave 3: Beregne summen og produktet av elementene i en array
function sum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

function product(arr) {
    return arr.reduce((acc, val) => acc * val, 1);
}

let list3 = [3, 66, 45];
console.log(sum(list3)); // Output: 114
console.log(product(list3)); // Output: 8910

// Oppgave 4: Beregne summen av hver enkelt indeksverdi i to lister
function sumAtIndex(list1, list2) {
    let result = [];
    for (let i = 0; i < list1.length; i++) {
        result.push(list1[i] + list2[i]);
    }
    return result;
}

let list4 = [1, 2, 3, 4, 5];
let list5 = [0, 1, 2, 3, 4];
console.log(sumAtIndex(list4, list5)); // Output: [1, 3, 5, 7, 9]
