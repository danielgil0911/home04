const number1 = (prompt ('Enter the first number: '));  
const number2 = (prompt ('Enter the second number: '));  
const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): '); 

if (operator == '+') { 
    result = number1 + number2;  
}  
else if (operator == '-') {   
    result = number1 - number2;  
}  
else if (operator == '*') { 
    result = number1 * number2;  
}  
else {  
    result = number1 / number2; 
}  

console.log(result);