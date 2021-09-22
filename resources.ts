const getUserChoice = (): number => {
  return Math.floor(Math.random() * 12) + 1;
};

const generateRandomStr = (): string => {
  let str = "";
  const ramdomCharCode = (): number => {
    return Math.floor(Math.random() * 26) + 97;
  };
  for (let i = 0; i < 6; i++) {
    const code = ramdomCharCode();
    const letter = String.fromCharCode(code);
    str += letter;
  }
  return str;
};
const f1 = (): string => {
  return generateRandomStr();
};
const f2 = (): string => {
  return generateRandomStr();
};
const f3 = (): string => {
  return generateRandomStr();
};
const f4 = (): string => {
  return generateRandomStr();
};
const f5 = (): string => {
  return generateRandomStr();
};
const f6 = (): string => {
  return generateRandomStr();
};
const f7 = (): string => {
  return generateRandomStr();
};
const f8 = (): string => {
  return generateRandomStr();
};
const f9 = (): string => {
  return generateRandomStr();
};
const f10 = (): string => {
  return generateRandomStr();
};
const f11 = (): string => {
  return generateRandomStr();
};
const f12 = (): string => {
  return generateRandomStr();
};

export { getUserChoice, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12 };
