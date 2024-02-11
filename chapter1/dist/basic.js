function getFinalPrice(price, discount) {
    var final = price - price / discount;
    console.log(final);
}
var p1 = {
    name: "james",
    age: 27
};
function foo(a) {
    if ("a" in a) {
        console.log("Interface A");
        return;
    }
    console.log("Interface B");
}
foo({ b: "test" });
