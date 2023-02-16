/*
6. Write a JavaScript program to count no of odd & even numbers in given
array
Create a function which accepts array of numbers and prints the output like the following:
Input and Output:
countOddEven([5, 8, 7, 12, 13])
Odd: 2
Even: 3
countOddEven([200, 135, 58, 40, 18])
Odd: 1
Even: 4
countOddEven([50, 40, 20, 25, 55, 85, 35])
Odd: 4
Even: 3
countOddEven([23, 18, 11, 69])
Odd: 3
Even: 1
countOddEven([26, 16, 15, 25, 63])
Odd: 3
Even: 2
 */


function countOddEven(array){
    let Odd = 0;
    let Even = 0;

    array.forEach(element => {
        if(element%2==0){
            Even++;
        }else{
            Odd++;
        }
    });

    console.log(`Odd: ${Odd}`)
    console.log(`Even: ${Even}`);
}


countOddEven([26, 16, 15, 25, 63])

countOddEven([50, 40, 20, 25, 55, 85, 35])