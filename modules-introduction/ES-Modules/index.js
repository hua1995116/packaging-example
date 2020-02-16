import { name, github } from './demo.js';

console.log(name(), github());

document.body.innerHTML = `<h1>${name()} ${github()}</h1>`