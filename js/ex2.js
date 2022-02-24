const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
function circumference() {
    return Math.PI * r * r
 }
function area() {
    return 2 * Math.PI * r
}


console.log(`Its circumference is ${circumference()}`);
console.log(`Its area is ${area()}`);
