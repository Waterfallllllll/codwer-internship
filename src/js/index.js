"use strict";

let answer = prompt("", "");

// if (answer >= 25) {
//     alert("I am over 25 years old");
// } else {
//     alert("I am less than 25 years old");
// }

(answer >= 25) ? alert("I am over 25 years old") : alert("I am less than 25 years old");

let answerDay = prompt("", "");

switch (answerDay) {
    case "Monday":
        alert("Time to work!");
        break;
    case "Tuesday":
        alert("Time to work!");
        break;
    case "Wednesday":
        alert("Time to work!");
        break;
    case "Thursday":
        alert("Time to work!");
        break;
    case "Friday":
        alert("Time to work!");
        break;
    case "Saturday":
        alert("Time to rest!");
        break;
    case "Sunday":
        alert("Time to rest!");
        break;
    default:
        alert("Something wrong");
        break;
}

let arr = ["HTML", 11, "JavaScript", 2, "CSS", 23, 12];

arr.push(-12);
arr.unshift(1000);
arr.push("Last array element");
let word = "JavaScript";
let arrOne = arr.filter((string) => string !== word);
console.log(arrOne);

let arrTwo = arrOne.filter(function (n) {
    if (typeof (n) == "number") {
        return 1;
    }
});
console.log(arrTwo);

let arrThree = arrTwo.map(function (n) {
    return n * n;
});

console.log(arrThree);

console.log(Math.max(...arrThree));