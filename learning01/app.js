console.log('Hello world');

var x = 10;
var y = 25;
console.log(x * y);

var msgs = require("./msgs.js");
console.log(msgs.first);
console.log("Hello " + msgs.author.firstName);

var funcs = require("./functions.js");
console.log(funcs());

var pseudoClass = require("./pseudoClass.js");
var instance = new pseudoClass();
console.log(instance.first);