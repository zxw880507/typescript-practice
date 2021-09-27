// Implement the built-in Readonly<T> generic without using it.
// Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.
// For example
var test;
(function (test) {
    const todo = {
        title: "Hey",
        description: "foobar",
    };
    todo.title = "Hello"; // Error: cannot reassign a readonly property
    todo.description = "barFoo"; // Error: cannot reassign a readonly property
})(test || (test = {}));
