// Implement a generic MyReadonly2<T, K> which takes two type argument T and K.
// K specify the set of properties of T that should set to Readonly. When K is not provided, it should make all properties readonly just like the normal Readonly<T>.
// For example
var test;
(function (test) {
    const todo = {
        title: "Hey",
        description: "foobar",
        completed: false,
    };
    todo.title = "Hello"; // Error: cannot reassign a readonly property
    todo.description = "barFoo"; // Error: cannot reassign a readonly property
    todo.completed = true; // OK
})(test || (test = {}));
