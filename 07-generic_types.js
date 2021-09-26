//Do not change the code above this line.
//Provide type annotations for the variables below:
let theFamily = {
    parents: [3, 4],
    mate: 9,
    children: [5, 30, 121],
};
let someFamily = {
    parents: [true, true],
    mate: false,
    children: [false, false, true, true],
};
let aFamily = {
    parents: [
        { name: "Mom", job: "software engineer" },
        { name: "Dad", job: "coding engineer" },
    ],
    mate: { name: "Matesky", job: "engineering coder" },
    children: [{ name: "Babesky", job: "none" }],
};
let anotherFamily = {
    parents: [
        { name: "Momo", tailWagSpeed: 3 },
        { name: "Dado", tailWagSpeed: 100 },
    ],
    mate: { name: "Cheems", tailWagSpeed: 7 },
    children: [
        { name: "Puppin", tailWagSpeed: 0.001 },
        { name: "Puppenaut", tailWagSpeed: 0.0001 },
        { name: "Puppenator", tailWagSpeed: 0.01 },
    ],
};
// Generic Functions
function getFilledArray(value, n) {
    return Array(n).fill(value);
}
let stringArray;
let numberArray;
let personArray;
let coordinateArray;
// Write your code below:
stringArray = getFilledArray("hi", 6);
numberArray = getFilledArray(9, 6);
personArray = getFilledArray({ name: "J. Dean", age: 24 }, 6);
coordinateArray = getFilledArray([3, 4], 6);
