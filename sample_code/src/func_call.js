function myFunc(theObject) {
    theObject.make = "Toyota";
}
var mycar = { make: "Honda", model: "Accord", year: 1998 };

var x, y;
x = mycar.make; // x gets the value "Honda"

myFunc(mycar);
y = mycar.make; // y gets the value "Toyota"

console.log(x);
console.log(y);
