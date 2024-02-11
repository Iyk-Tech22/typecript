/***** TYPE DECLARATIONS *****/
// In this chapter will cover how to declare types in typescript
// declaring types for variable
// declaring types for function declaration
// using type aliasing with the type keyword
// declaring custome types using type, interface and class


/***** DECLARING TYPES FOR VARIABLE *****/
// You can declare variable type in one of two ways either explicit or implicit

let name1 = "john"; // type here is inferred by tsc.
let name2: string = "doe"; // type declared here is set explicitly to (string) type.
let fullName: "Iyk Faiz"; // type used here is called (type literal).
fullName = "Iyk Faiz";

// logging the values to the runtime env console.
// console.log(name1, name2);
// console.log(`my name is ${fullName}`);

/***** DECLARING TYPES FOR FUNCTION *****/
// you can also add type annotation to function declarations, such as adding type the func. args and return value.

function greeting(person: string): string {
    return `hello ${person}`;
}

// logging the values to the runtime env console.
// console.log(greeting("John"));

/***** USING UNION TYPE *****/
// They are allow u to define that a code can have one of several types: (type1|type2).

function padLeft(value: string, padding:string | number){
    if(typeof padding == "number"){
        return Array(padding+1).join(" ") + value;
    }
    if(typeof padding == "string"){
        return padding + value;
    }
    else {
        return padding;
    }
}

// console.log( padLeft("Hello world", 4));
// console.log( padLeft("Hello world", "John says "));
// console.log( padLeft("Hello world", true)); / runtime error /


/***** USE OF CUSTOM TYPE *****/
// This are user defined types.

// Using (type) Keyword To Define Custom Type.
// The (type) keyword allow you to define a new type or an alias of a existing type.

// Declaring Type Alias Using (type) keyword
type Foot = number;
type Pound = number;

// Declaring New Custom Type Using (type) keyword.
type Patient = {
    name: string,
    height: Foot,
    weight: Pound
};

let patient1: Patient = {
    name: "John",
    height: 7.8,
    weight: 69
};

console.log(patient1.name, patient1.height, patient1.weight);

// Applieng A Type Aliasing To Func. Declaratuions

type ValidateFn = (c: FormControl) => {[key: string]: any} | null;
type FormControl = {
    error: null,
    valid: true
}
function valdidate(c:FormControl): FormControl | null {
    return c;
}
class Form {
    constructor(initialValue: string, formControl: FormControl, validateFn: ValidateFn){
        console.log(validateFn(formControl));
    }
}
let input: FormControl = {
    error: null,
    valid: true
}
// new Form("login", input, valdidate);


// Using (class) Keyword To Define Custom Type.
// The class keyword allow us define custom type

class Person {
    constructor(firstName: string) {};
}

let p:Person = {firstName: "Ikechukwu", lastName: "Godwin"};
