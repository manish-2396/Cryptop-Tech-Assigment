/*
11. Write a JavaScript program to perform series of array operations
Perform following series of operations in the given array:
Input and Output:
 */

const array = [];

// 1) add number at start of array

function addNum(num){
    array.push(num)
}

// 2) remove last element


function removeLastElement(){
    if(array.length > 0){
        array.pop()
    }
}

// 3) add element at 2nd index

function addElementAt2ndIndex(num){
    if(array.length > 0){
        array.splice(1, 0 , num)
    }
}

// 4) remove first element

function removeFirstElement(){
    array.shift();
}

// 5) add new last element

function addLastElement(num){
    array.push(num);
}


addNum(6) // 6
addNum(7) // 7
removeLastElement() // 6
addElementAt2ndIndex(10) // 6 10
removeFirstElement() // 10
addLastElement(8) // 10 8

console.log(array);

