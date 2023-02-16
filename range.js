/*
7. Write a JavaScript program to check whether a given number is in a
given range
Create a function which accepts 3 numbers and prints the output like the following:
Input and Output:
isInRange(5, 10, 20)
True
isInRange(99, 100, 200)
False
isInRange(151, 150, 250)
True
isInRange(161, 170, 270)
False
isInRange(20, 10, 50)
True
 */

function isInRange(num , start , end){
    return num > start && num < end 
}

console.log(isInRange(20, 10, 50))