function getFinalPrice(price: number, discount: number){
    const final = price - price / discount;
    console.log(final);
}


// CUSTOME TYPE
type person = {
    name: string,
    age: number,
}

const p1: person = {
    name: "james",
    age: 27
}

// In Type Guard: Use for differenting properties in different custome type
interface A  {
    a: string
}

interface B {
    b: string
}

function foo(a: A|B){
    if("a" in a){
        console.log("Interface A");
        return;
    }
    console.log("Interface B");
}


foo({b:"test"});