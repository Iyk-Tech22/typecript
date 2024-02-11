"use strict";
/***** TYPE DECLARATIONS *****/
// In this chapter will cover how to declare types in typescript
// declaring types for variable
// declaring types for function declaration
// using type aliasing with the type keyword
// declaring custome types using type, interface and class
/***** DECLARING TYPES FOR VARIABLE *****/
// You can declare variable type in one of two ways either explicit or implicit
let name1 = "john"; // type here is inferred by tsc.
let name2 = "doe"; // type declared here is set explicitly to (string) type.
let fullName; // type used here is called (type literal).
fullName = "Iyk Faiz";
// logging the values to the runtime env console.
// console.log(name1, name2);
// console.log(`my name is ${fullName}`);
/***** DECLARING TYPES FOR FUNCTION *****/
// you can also add type annotation to function declarations, such as adding type the func. args and return value.
function greeting(person) {
    return `hello ${person}`;
}
// logging the values to the runtime env console.
// console.log(greeting("John"));
/***** USING UNION TYPE *****/
// They are allow u to define that a code can have one of several types: (type1|type2).
function padLeft(value, padding) {
    if (typeof padding == "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding == "string") {
        return padding + value;
    }
    else {
        return padding;
    }
}
let patient1 = {
    name: "John",
    height: 7.8,
    weight: 69
};
console.log(patient1.name, patient1.height, patient1.weight);
function valdidate(c) {
    return c;
}
class Form {
    constructor(initialValue, formControl, validateFn) {
        console.log(validateFn(formControl));
    }
}
let input = {
    error: null,
    valid: true
};
// new Form("login", input, valdidate);
// Using (class) Keyword To Define Custom Type.
// The class keyword allow us define custom type
class Person {
    constructor(firstName) { }
    ;
}
let p = { firstName: "Ikechukwu", lastName: "Godwin" };
