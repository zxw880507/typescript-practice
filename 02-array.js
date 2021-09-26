// Array Type Annotations
// Arrays:
let bestNumbers = [7, 77, 4];
let bestLunches = ["chicken soup", "non-chicken soup"];
let bestBreakfasts = [
    "fasting",
    "oatmeal",
    "tamago kake gohan",
    "any kind of soup",
];
let bestBooleans = [true, false];
// Multi-dimensional Arrays:
let bestMealPlan = [
    bestLunches,
    bestBreakfasts,
    ["baked potato", "mashed potato"],
];
let bestBooleansTwice = [bestBooleans, bestBooleans];
let numbersMulti = [
    [[1], [2, 3]],
    [[7], bestNumbers],
];
// Tuples
let favoriteCoordinates = [
    40,
    43.2,
    "N",
    73,
    59.8,
    "W",
];
favoriteCoordinates = [17, 45, "N", 142, 30, "E"];
// Array Type Inference
let dogTup = [
    "dog",
    "brown fur",
    "curly tail",
    "sad eyes",
];
// Your code goes here:
// let myArr: string[];
let myArr = dogTup.concat(dogTup);
myArr[50] = "not a dog";
// Rest Parameters
function addPower(p, ...numsToAdd) {
    let answer = 0;
    for (let i = 0; i < numsToAdd.length; i++) {
        answer += Math.pow(numsToAdd[i], p);
    }
    return answer;
}
// Spread Syntax
function performDanceMove(moveName, moveReps, hasFlair) {
    console.log(`I do the ${moveName} ${moveReps} times !`);
    if (hasFlair) {
        console.log("I do it with flair!");
    }
}
let danceMoves = [
    ["chicken beak", 4, false],
    ["wing flap", 4, false],
    ["tail feather shake", 4, false],
    ["clap", 4, false],
    ["chicken beak", 4, true],
    ["wing flap", 4, true],
    ["tail feather shake", 4, true],
    ["clap", 4, true],
];
for (let move of danceMoves) {
    performDanceMove(...move);
}
// review
let monster = [
    [],
    [],
    [[]],
    [[]],
    [[[["X"]]]],
    [[[["X"]]]],
    [[[[[[1111111]]]]]],
    [],
    [],
    [],
    [],
    [],
    [],
    [[3]],
];
