const user = { id: 11, name: 'prodip', job: 'web - developer' };
// console.log(user);
const stringified = JSON.stringify(user);
console.log(stringified);
const converted = JSON.parse(stringified);
console.log(converted);