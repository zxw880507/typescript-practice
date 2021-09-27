// Implement a generic MyReadonly2<T, K> which takes two type argument T and K.
{
    readonly[key in T];
    T[key];
}
{
    readonly[key in K];
    T[key];
}
;
const todo = {
    title: "Hey",
    description: "foobar",
    completed: false,
};
todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
todo.completed = true; // OK
