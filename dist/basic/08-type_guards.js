const siameseCat = {
    name: "Proxie",
    run: () => "pitter pat",
};
const bettaFish = {
    name: "Neptune",
    swim: () => "bubble blub",
};
function move(pet) {
    if ("run" in pet) {
        return pet.run();
    }
    if ("swim" in pet) {
        return pet.swim();
    }
}
console.log(move(siameseCat));
const fettuccine = {
    menuName: "Fettuccine",
    boil: () => "Heat water to 212 degrees",
};
const steak = {
    menuName: "New York Strip Steak",
    panFry: () => "Heat oil to 350 degrees",
};
function prepareEntree(entree) {
    return "boil" in entree ? entree.boil() : entree.panFry();
}
console.log(prepareEntree(fettuccine));
const iron = {
    magnetize: () => "Electromagnet activated",
};
const bottle = {
    melt: () => "Furnace set to 2,700 degrees",
};
function recycle(trash) {
    // Add your code below:
    if ("magnetize" in trash) {
        return trash.magnetize();
    }
    return trash.melt();
}
console.log(recycle(iron));
