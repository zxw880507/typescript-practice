// Optional Parameters
function proclaim(status) {
    console.log(`I'm ${status || "not ready..."}`);
}
proclaim();
proclaim("ready?");
proclaim("ready!");
// Default Parameters
/**
 * Prints the status
 * @param status - The first input string, default 'not ready'
 * @param repeat - The second input number, default 1
 * @returns nothing
 */
function proclaim1(status = "not ready...", repeat = 1) {
    for (let i = 0; i < repeat; i += 1) {
        console.log(`I'm ${status}`);
    }
}
proclaim1();
proclaim1("ready?");
proclaim1("ready!", 3);
// Inferring Return Types
/* Challenge! Using what you’ve learned above, create a variable myVar with the type number. To make this more interesting:

You must not use the : character.
You must not type any numbers into your code. */
function getRandomNumber() {
    return Math.random();
}
const myVar = getRandomNumber();
// Explicit Return Types
import { getUserChoice, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, } from "./resources";
function returnString() {
    let num = getUserChoice();
    switch (num) {
        case 1:
            return f1();
        case 2:
            return f2();
        case 3:
            return f3();
        case 4:
            return f4();
        case 5:
            return f5();
        case 6:
            return f6();
        case 7:
            return f7();
        case 8:
            return f8();
        case 9:
            return f9();
        case 10:
            return f10();
        case 11:
            return f11();
        case 12:
            return f12();
    }
    return "randomString";
}
console.log(returnString());
// Void Return Type
/**
 * Prints all the salad.
 * @param fruit1 - The first input string
 * @param fruit2 - The second input string
 * @returns nothing
 */
function makeFruitSalad(fruit1, fruit2) {
    let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2 + fruit1 + fruit1;
    console.log(salad);
}
makeFruitSalad("banana", "pineapple");
// Review
function useMagnifyingGlass() {
    console.log("I will use my magnifying glass.");
}
function determineCulprit() {
    return Math.floor(Math.random() * 2 + 1);
}
function doSleuthing(numberOfClues, clue1, clue2, suspect1, suspect2) {
    console.log("I am a famous detective and I will solve the crime.");
    let unnecessaryVariable = "Why is this here?";
    unnecessaryVariable = useMagnifyingGlass();
    console.log("Now I consider the first clue: ", clue1);
    console.log("Now I consider the second clue: ", clue2);
    let culpritNumber = determineCulprit();
    console.log("Now, I will return to you the culprit. There but for the grace of God go we.");
    if (culpritNumber == 1) {
        return suspect1;
    }
    if (culpritNumber == 2) {
        return suspect2;
    }
    return "I couldn't figure out who drank the priceless milk. :( :(";
}
let answer = doSleuthing(2, "The parrot heard everything!", "All the doors and windows were shut from the INSIDE.", "Burglar Bob", "Saint Sam");
console.log("The culprit was none other than ", answer, "!");
