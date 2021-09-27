function updateRunGoal(run) {
    console.log(`
Miles left:       ${50 - run.miles}
Percent of goal:  ${(run.miles / 50) * 100}% complete
  `);
}
updateRunGoal({
    miles: 5,
});
class DesktopDirectory {
    constructor() {
        this.config = {
            default: {
                encoding: "utf-8",
                permissions: "drw-rw-rw-",
            },
        };
    }
    addFile(name) {
        console.log(`Adding file: ${name}`);
    }
    showPreview(name) {
        console.log(`Opening preview of file: ${name}`);
    }
}
const Desktop = new DesktopDirectory();
Desktop.addFile("lesson-notes.txt");
Desktop.showPreview("lesson-notes.txt");
console.log(Desktop.config);
// Add your interface here
const me = {
    code: () => console.log("Headphones on. Coffee brewed. Editor open."),
    name: "Corrina",
    hobbies: ["Building rockets"],
};
me.code();
function getUserName(options) {
    if (options.firstName && options.lastName) {
        return console.log(`${options.firstName} ${options.lastName}`);
    }
    return console.log(options.username);
}
getUserName({
    firstName: "Mr.",
    lastName: "Oshiro",
    username: "hotelowner304",
});
getUserName({
    firstName: "Madeline",
    username: "mountainClimber",
});
