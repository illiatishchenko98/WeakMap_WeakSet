'use strict';


let cache = new WeakMap();

function cacheU(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now())
    }

    cache.get(user);
}

let lena = {name: 'Elena'};
let alex = {name: 'Alex'};

cacheU(lena);
cacheU(alex);


lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));



// WeakSet   add, has, delete


let messages = [{text: "Hello",
from: "John"}, {text: "Hello",
from: "Alex"}, {text: "Hello",
from: "Elena"}];


let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

readMessages.add(messages[0]);


console.log(readMessages.has(messages[0]));
