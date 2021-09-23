// Array Type Annotations
// Arrays:
var bestNumbers = [7, 77, 4];
var bestLunches = ["chicken soup", "non-chicken soup"];
var bestBreakfasts = [
    "fasting",
    "oatmeal",
    "tamago kake gohan",
    "any kind of soup",
];
var bestBooleans = [true, false];
// Multi-dimensional Arrays:
var bestMealPlan = [
    bestLunches,
    bestBreakfasts,
    ["baked potato", "mashed potato"],
];
var bestBooleansTwice = [bestBooleans, bestBooleans];
var numbersMulti = [
    [[1], [2, 3]],
    [[7], bestNumbers],
];
// Tuples
var favoriteCoordinates = [
    40,
    43.2,
    "N",
    73,
    59.8,
    "W",
];
favoriteCoordinates = [17, 45, "N", 142, 30, "E"];
// Array Type Inference
var dogTup = [
    "dog",
    "brown fur",
    "curly tail",
    "sad eyes",
];
// Your code goes here:
// let myArr: string[];
var myArr = dogTup.concat(dogTup);
myArr[50] = "not a dog";
// Rest Parameters
function addPower(p) {
    var numsToAdd = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numsToAdd[_i - 1] = arguments[_i];
    }
    var answer = 0;
    for (var i = 0; i < numsToAdd.length; i++) {
        answer += Math.pow(numsToAdd[i], p);
    }
    return answer;
}
// Spread Syntax
function performDanceMove(moveName, moveReps, hasFlair) {
    console.log("I do the " + moveName + " " + moveReps + " times !");
    if (hasFlair) {
        console.log("I do it with flair!");
    }
}
var danceMoves = [
    ["chicken beak", 4, false],
    ["wing flap", 4, false],
    ["tail feather shake", 4, false],
    ["clap", 4, false],
    ["chicken beak", 4, true],
    ["wing flap", 4, true],
    ["tail feather shake", 4, true],
    ["clap", 4, true],
];
for (var _i = 0, danceMoves_1 = danceMoves; _i < danceMoves_1.length; _i++) {
    var move = danceMoves_1[_i];
    performDanceMove.apply(void 0, move);
}
// review
var monster = [
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
