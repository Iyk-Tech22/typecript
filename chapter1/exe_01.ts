/**
    Write a program with two custom types, Dog and Fish, which are declared using
    classes. Each of these types must have a name property. The Dog class should have a
    sayHello(): string method, and the Fish class should have a dive(howDeep: number):
    string method.
    Declare a new Pet type as a union of Dog and Fish. Write a talkToPet(pet: Pet):
    string function that will use type guards and will either invoke the sayHello()
    method on the Dog instance or print the message “Fish cannot talk, sorry.”
    Invoke talkToPet() three times providing the object Dog first, then Fish, and
    finally an object that is neither Dog nor Fish.
 */

// SOLUTION
class Dog {
    constructor(readonly name:string){}
    sayHello(): string {
        return `${this.name.toUpperCase()} says hello`;
    }
}

class Fish {
    constructor(readonly name:string){}
}

type Pet = Dog | Fish;

function talkToPet(pet: Pet): string {
    if(pet instanceof Dog){
        return pet.sayHello();
    }
    return "Fish cannot talk, sorry.";
}

const dog1 = new Dog("jack");
const dog2 = new Dog("bingo");
const fish1 = new Fish("kit");

console.log(talkToPet(dog1));
console.log(talkToPet(dog2));
console.log(talkToPet(fish1));