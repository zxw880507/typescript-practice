// Interfaces and Types
// Write an interface here
interface Run {
  miles: number;
}

function updateRunGoal(run: Run) {
  console.log(`
Miles left:       ${50 - run.miles}
Percent of goal:  ${(run.miles / 50) * 100}% complete
  `);
}

updateRunGoal({
  miles: 5,
});

// Interfaces and Classes
// Composed Types
// Write an interface here
interface Directory {
  addFile: (name: string) => void;
  config: Config;
}
interface Config {
  default: DefaultConfig;
}
interface DefaultConfig {
  encoding: string;
  permissions: string;
}

class DesktopDirectory implements Directory {
  config = {
    default: {
      encoding: "utf-8",
      permissions: "drw-rw-rw-",
    },
  };

  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();

Desktop.addFile("lesson-notes.txt");
Desktop.showPreview("lesson-notes.txt");
console.log(Desktop.config);

// Extending Interfaces
interface Person {
  name: string;
  hobbies: string[];
}
interface Developer extends Person {
  code: () => void;
}

// Add your interface here

const me: Developer = {
  code: () => console.log("Headphones on. Coffee brewed. Editor open."),
  name: "Corrina",
  hobbies: ["Building rockets"],
};

me.code();

// Optional Type Members
// Write an interface here
interface UserNameOptions {
  username: string;
  firstName?: string;
  lastName?: string;
}

function getUserName(options: UserNameOptions) {
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
