const getUserChoice = () => {
    return Math.floor(Math.random() * 12) + 1;
};
const generateRandomStr = () => {
    let str = "";
    const ramdomCharCode = () => {
        return Math.floor(Math.random() * 26) + 97;
    };
    for (let i = 0; i < 6; i++) {
        const code = ramdomCharCode();
        const letter = String.fromCharCode(code);
        str += letter;
    }
    return str;
};
const f1 = () => {
    return generateRandomStr();
};
const f2 = () => {
    return generateRandomStr();
};
const f3 = () => {
    return generateRandomStr();
};
const f4 = () => {
    return generateRandomStr();
};
const f5 = () => {
    return generateRandomStr();
};
const f6 = () => {
    return generateRandomStr();
};
const f7 = () => {
    return generateRandomStr();
};
const f8 = () => {
    return generateRandomStr();
};
const f9 = () => {
    return generateRandomStr();
};
const f10 = () => {
    return generateRandomStr();
};
const f11 = () => {
    return generateRandomStr();
};
const f12 = () => {
    return generateRandomStr();
};
export { getUserChoice, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12 };
