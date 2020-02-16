const b = require('./b');

console.log(b.age);

setTimeout(() => {
    console.log(b.age);
    console.log(require('./b').age);
}, 100);

