
// Instructions:


// Using one single line of JavaScript code, complete the following tasks on
// the array of integers below.

// 1. Sort the numbers in descending order (10, 9, 8, 7, etc).

// 2. Remove any integers greater than 19.

// 3. Multiply each remaining number by 1.5 and then subtract 1.

// 4. Then output (either in the DOM or the console) the sum of all the resulting numbers.\


var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

var filteredArray;
var postMathArray;
var finalSum;


var mySolution =

integers.sort(function(a, b) {return b - a}); console.log(mySolution);

function filterNums(value) {return value > 19;}; filteredArray = integers.filter(filterNums); console.log(filteredArray);

function doMath(value) {return value * 1.5 - 1;}; postMathArray = integers.map(doMath); console.log(postMathArray);

finalSum = integers.reduce(function(a, b) {return a + b;});


// Sources used:

// 1.  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// 2.  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 3.  https://www.discovermeteor.com/blog/understanding-javascript-map/

// 4. https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter

// Other helpful documentation regarding callbacks: http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/
