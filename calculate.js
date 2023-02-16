/*
8. Write a JavaScript program to calculate output from expression string
and print the output
Create a function which accepts a string and prints the output like the following:
Input and Output:
calculate('10 + 30')
40
calculate("20 * 20")
400
calculate("10 / 5")
2
calculate("12 - 10")
2
calculate("11 % 2")
1
 */


function calculate(string){
   return eval(string);
}

console.log(calculate("10 + 30"))

