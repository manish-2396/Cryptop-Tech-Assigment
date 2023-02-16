/*
10. Write a JavaScript program to delete array of values from the given
array and prints the new array
Create a function which accepts array of numbers and array of indexes and prints the output like
the following:
Input and Output:
deleteValues([5, 8, 7, 12, 13], [1, 3, 4])
[5, 7]
deleteValues([200, 135, 58, 40, 18], [1, 4])
[200, 58, 40]
deleteValues([50, 40, 20, 25, 55, 85, 35], [6, 4, 3, 1])
[50, 20, 85]
deleteValues([23, 18, 11, 69], [3, 0])
[18, 11]
deleteValues([26, 16, 15, 25, 63], [2, 0, 1])
[25, 63]
 */

function deleteValues(array, index) {
    let temp = [];

    for(let i=0; i<array.length; i++){
        if(!index.includes(i)){
            temp.push(array[i])
        }
    }
   return temp;
}

let ans = deleteValues([50, 40, 20, 25, 55, 85, 35], [6, 4, 3, 1]);

console.log(ans);
