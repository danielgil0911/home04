const values = [3, 11, 7, 2, 9, 10];
sum = 0
for (i = 0; i < values.length; i++){
    sum += values[i]
}
var min = Math.min(...values);
var max = Math.max(...values);

console.log("sum is " + sum);
console.log("Minimum value is " + min);
console.log("Maximum value is " + max);
